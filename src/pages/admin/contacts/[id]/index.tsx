import { useRouter } from "next/router";

import Loading from "../../../../elements/Loading";
import Error from "../../../../elements/Error";
import Flex from "../../../../elements/Flex";
import Text from "../../../../elements/Text";
import Title from "../../../../elements/Title";
import dates from "../../../../shared/util/dates";
import React from "react";
import { ProtectRoute } from "../../../../shared/protected_route";
import { useGetContactQuery } from "src/graphql/generated/graphql";

const ContactViewer: React.FC = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, loading, error } = useGetContactQuery({
    variables: { where: { id: String(id) } },
  });

  if (error) return <Error errorDescription={"שגיאה בטעינה העמוד"} />;
  if (loading) return <Loading />;
  return (
    <ProtectRoute>
      <Flex alignItems="center" flexDirection="column">
        <Title>{data?.contact?.survey?.name}</Title>
        <div>
          <label>שם: </label>
          <label>{data?.contact?.fullName}</label>
        </div>
        <div>
          <label>טלפון: </label>
          <label>{data?.contact?.phoneNumber}</label>
        </div>

        <div>
          <label>תאריך: </label>
          <label>{dates.renderDate(data?.contact?.createdAt)}</label>
        </div>
        <div>
          {data?.contact?.survey?.answers?.map((entry) => (
            <Flex key={entry?.answer} margin={3} flexDirection="column">
              <Text fontSize="large"> {entry?.question}</Text>
              <Text> {entry?.answer}</Text>
            </Flex>
          ))}
        </div>
      </Flex>
    </ProtectRoute>
  );
};

export default ContactViewer;
