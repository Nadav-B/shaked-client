import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  GetContact,
  GetContactVariables,
} from "../../../../graphql/__generated__/GetContact";
import query from "../../../../graphql/GetContact.graphql";
import Loading from "../../../../elements/Loading";
import Error from "../../../../elements/Error";
import Flex from "../../../../elements/Flex";
import Text from "../../../../elements/Text";
import Title from "../../../../elements/Title";

const ContactViewer = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, loading, error } = useQuery<GetContact, GetContactVariables>(
    query,
    {
      variables: { id: String(id) },
    }
  );

  if (error) return <Error errorDescription={"שגיאה בטעינה העמוד"} />;
  if (loading) return <Loading />;
  return (
    <Flex marginBottom="14px" alignItems="center" flexDirection="column">
        <Title> איש קשר</Title>
      <div>
        <label>שם: </label>
        <label>{data.contact.fullName}</label>
      </div>
      <div>
        <label>טלפון: </label>
        <label>{data.contact.phoneNumber}</label>
      </div>
      <h4>{data.contact.survey.name}</h4>
      <div>
        {data.contact.survey.answers.map((entry) => (
          <div>
            <Text fontSize="large"> {entry.question}</Text>
            <Text> {entry.answer}</Text>
          </div>
        ))}
      </div>
    </Flex>
  );
};

export default ContactViewer;
