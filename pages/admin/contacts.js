import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import api from "../../shared/api";
import Text from "../../elements/Text";

import Button from "../../elements/Button";
import Error from "../../elements/Error";
import Loading from "../../elements/Loading";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Chartkick, { ColumnChart, PieChart } from "react-chartkick";
import "chart.js";
import { ProtectRoute } from "../../shared/protected_route";
import Wrapper from "../../elements/Wrapper";
import TextWrapper from "../../elements/TextWrapper";

const Display = {
  contacts: 0,
  delete: 1,
  survey: 2,
  chart: 3,
};

const ContactManagers = () => {
  Chartkick.options = {
    colors: ["#F77F00", "#FCBF49"],
  };

  const [displayView, setDisplayView] = useState(Display.contacts);

  // contacts
  const [contacts, setContacts] = useState();
  const [selectedContacts, setSelectedContacts] = useState([]);

  const [survey, setSurvey] = useState();
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

  const showChart = () => {
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
      <Wrapper>
          {displayView == Display.contacts && (
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
                              checked={selectedContacts.find(
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
                                  setSurvey(contact.survey);
                                  setDisplayView(Display.survey);
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
                        onClick={() => setDisplayView(Display.delete)}
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

              <Button
                onClick={() => {
                  showChart();
                  setDisplayView(Display.chart);
                }}
              >
                פתח תרשים
              </Button>
            </StyledContact>
          )}

          {displayView == Display.delete && (
            <DeleteModal
              deleteSelectedContacts={deleteSelectedContacts}
              setDisplayView={setDisplayView}
            />
          )}

          {displayView == Display.survey && (
            <SurveyModal survey={survey} setDisplayView={setDisplayView} />
          )}

          {displayView == Display.chart && (
            <ChartModal
              setDisplayView={setDisplayView}
              length={contacts.length}
              datesData={datesData}
            />
          )}
      </Wrapper>
    </ProtectRoute>
  );
};

const DeleteModal = ({ deleteSelectedContacts, setDisplayView }) => {
  return (
    <StyledDeleteModal>
      <Text>בטוח שברצונך למחוק?</Text>
      <Button
        onClick={() => {
          deleteSelectedContacts();
          setDisplayView(Display.contacts);
        }}
      >
        כן
      </Button>
      <Button
        onClick={() => {
          setDisplayView(Display.contacts);
        }}
      >
        לא
      </Button>{" "}
    </StyledDeleteModal>
  );
};

const SurveyModal = ({ survey, setDisplayView }) => {
  return (
    <div>
      <h1> {survey.name}</h1>
      {survey.answers.map((entry) => (
        <TextWrapper>
          <Text fontSize="large"> {entry.question}</Text>
          <Text> {entry.answer}</Text>
        </TextWrapper>
      ))}
      <Button onClick={() => setDisplayView(Display.contacts)}>סגור</Button>
    </div>
  );
};

const ChartModal = ({ length, datesData, setDisplayView }) => {
  return (
    <div>
      <ColumnChart data={datesData} />
      <p> סה״כ אנשי קשר {length}</p>
      <Button onClick={() => setDisplayView(Display.contacts)}>סגור</Button>
    </div>
  );
};

const StyledContact = styled.div`

margin-left: 20px;
margin-right: 20px;

  a:hover {
    color: blue;
  }

  td {
    text-align: center;
  }
`;

const StyledDeleteBanner = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
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

const StyledDeleteModal = styled.div`
  text-align: center;
  margin: auto;
  height: 100%;
  vertical-align: middle;
`;

export default ContactManagers;
