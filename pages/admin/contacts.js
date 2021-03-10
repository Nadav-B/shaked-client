import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import api from "../../shared/api";
import Text from "../../elements/Text";

import Button from "../../elements/Button";
import Error from "../../elements/Error";
import Loading from "../../elements/Loading";

import Modal from "../../elements/Modal";
import TextWrapper from "../../elements/TextWrapper";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Chartkick, { ColumnChart, PieChart } from "react-chartkick";
import "chart.js";
import { ProtectRoute } from "../../shared/protected_route";

const ContactManagers = () => {
  Chartkick.options = {
    colors: ["#F77F00", "#FCBF49"],
  };

  // contacts
  const [contacts, setContacts] = useState();
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [survey, setSurvey] = useState();

  // modals
  const [chartModal, setChartModal] = useState(false);
  const [deleteModal, setModalView] = useState(false);

  const [datesData, setdatesForStatistic] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const renderDate = (dateString) => {
    return new Date(dateString).toDateString();
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const deleteContact = async (id) => {
    return await api.deleteContact(id);
  };

  const deleteSelectedContacts = async () => {
    var temp = contacts;
    await Promise.all(
      selectedContacts.map(async (object) => {
        await deleteContact(object.id).then((res) => {
          if (res.status == "200") {
            temp = temp.filter((contact) => object.id !== contact.id);
          }
        });
      })
    );
    setSelectedContacts([]);
    setContacts(temp);
  };

  const updateSelectedContacts = (selected) => (event) => {
    if (event.target.checked) {
      setSelectedContacts([...selectedContacts, selected]);
    } else {
      setSelectedContacts(
        selectedContacts.filter((contact) => contact.id != selected.id)
      );
    }
  };

  const showSurvey = (survey) => {
    setSurvey(survey);
  };

  const showChart = () => {
    if (chartModal) {
      setChartModal(!chartModal);
    } else {
      setChartModal(!chartModal);
      if (contacts) {
        const dates = contacts
          .map((contact) => {
            return renderDate(contact.date);
          })
          .reduce((acc, value) => {
            if (!acc[value]) {
              acc[value] = 1;
            } else {
              acc[value]++;
            }
            return acc;
          }, {});
        setdatesForStatistic(dates);
      }
    }
  };

  useEffect(() => {
    async function getRequestForm() {
      try {
        const response = await api.getContacts();
        setContacts(response.data);
        setLoading(false);
        scrollToBottom();
      } catch {
        setError(true);
      }
    }
    if (!contacts) getRequestForm();
  });

  if (error) return <Error errorDescription={"התחבר מחדש"} />;
  if (loading) return <Loading />;

  return (
    <ProtectRoute>
      <TextWrapper>
        <StyledContact>
          <h1>אנשי קשר</h1>
          {contacts && (
            <div>
              <Table>
                <Thead>
                  <Tr>
                    <Th>סמן</Th>
                    <Th> שם מלא</Th>
                    <Th> טלפון</Th>
                    <Th> דוא״ל</Th>
                    <Th> כתובת</Th>
                    <Th> תאריך</Th>
                    <Th> סוג השירות</Th>
                    <Th> שאלון </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contacts.map((contact) => (
                    <Tr key={contact.id}>
                      <Td>
                        <input
                          onClick={updateSelectedContacts(contact)}
                          value={selectedContacts.find(
                            (object) => contact.id == object.id
                          )}
                          type="checkbox"
                        />
                      </Td>
                      <Td> {contact.fullname} </Td>
                      <Td>
                        <a href={`tel:${contact.phonenumber}`}>
                          {contact.phonenumber}
                        </a>
                      </Td>
                      <Td> {contact.email} </Td>
                      <Td> {contact.address} </Td>
                      <Td> {renderDate(contact.date)} </Td>
                      <Td> {contact.category} </Td>
                      <Td>
                        {contact.survey && (
                          <Button
                            onClick={() => {
                              showSurvey(contact.survey);
                            }}
                          >
                            {contact.survey.name}
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              {selectedContacts.length > 0 && (
                <StyledDeleteBanner>
                  <Button
                    className="flex-item"
                    onClick={() => setModalView(true)}
                  >
                    מחק {selectedContacts.length}
                  </Button>
                  <Button
                    className="flex-item"
                    onClick={() => setSelectedContacts([])}
                  >
                    נקה בחירה
                  </Button>

                  <Button
                    className="flex-item"
                    onClick={() => setSelectedContacts(contacts)}
                  >
                    סמן הכל
                  </Button>
                </StyledDeleteBanner>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
          {deleteModal && (
            <Modal>
              <Text>בטוח שברצונך למחוק?</Text>
              <Button
                onClick={() => {
                  deleteSelectedContacts();
                  setModalView(false);
                }}
              >
                כן
              </Button>
              <Button
                onClick={() => {
                  setModalView(false);
                }}
              >
                לא
              </Button>{" "}
            </Modal>
          )}
          {survey && <SurveyModal setSurvey={setSurvey} survey={survey} />}
          <Button onClick={() => showChart()}>פתח תרשים</Button>
          {chartModal && (
            <ChartModal
              showChart={showChart}
              length={contacts.length}
              datesData={datesData}
            />
          )}
        </StyledContact>
      </TextWrapper>
    </ProtectRoute>
  );
};

const StyledContact = styled.div`
  a:hover {
    color: blue;
  }
`;

const StyledDeleteBanner = styled.div`
  position: fixed;
  display: flex;
  width: 50%;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;

  .flex-item:first-child {
    max-width: 70px;
  }

  .flex-item {
    margin: 20px;
  }
`;

const SurveyModal = ({ survey, setSurvey }) => {
  const closeModal = () => {
    setSurvey();
  };

  return (
    <Modal>
      <h1> {survey.name}</h1>
      {survey.answers.map((entry) => (
        <div>
          <Text fontSize="large"> {entry.question}</Text>
          <Text> {entry.answer}</Text>
        </div>
      ))}
      <Button onClick={closeModal}>סגור</Button>
    </Modal>
  );
};

const ChartModal = ({ length, datesData, showChart }) => {
  return (
    <Modal>
      <ColumnChart data={datesData} />
      <p> סה״כ אנשי קשר {length}</p>
      <Button onClick={() => showChart()}>סגור</Button>
    </Modal>
  );
};

export default ContactManagers;
