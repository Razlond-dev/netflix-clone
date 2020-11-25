// eslint-disable-next-line no-unused-vars
import faqsData from "../fixtures/faqs.json";
import React from "react";
import { Accordion, OptForm } from "../components";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it Now!</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Enter your email to create your membership!</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
