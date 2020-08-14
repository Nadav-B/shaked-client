import React from "react";
import axios from "axios";
import Link from "next/link";
import ServicePreview from "../elements/ServicePreview"

const Services = ({ data }) => {
  return (
    <div>
    <h1>השירותים שלנו </h1>

      {data.map((service) => (
        <Link  key={service.id} passHref href="/service/[id]" as={`/service/${service.id}`}>
          <ServicePreview key={service.id} service={service} />
        </Link>
      ))}
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const url = `${process.env.NEXT_PUBLIC_API_URL}/services`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}
export default Services;
