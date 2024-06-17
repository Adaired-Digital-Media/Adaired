import React from 'react';

type FormPayload = {
  Name?: string;
  Email: string;
  Phone?: string;
  Interest?: string;
  Budget?: string;
  Message?: string;
  formId: string;
};

const templates: { [key: string]: React.FC<FormPayload> } = {
  "Homepage Form": ({ Name, Email, Phone, Interest, Budget, Message }) => (
    <>Name: {Name}<br />Email: {Email}<br />Phone: {Phone}<br />Interest: {Interest}<br />Budget: {Budget}<br />Message: {Message}</>
  ),
  "Contact page Form": ({ Name, Email, Phone, Message }) => (
    <>Name: {Name}<br />Email: {Email}<br />Message: {Message}<br />Phone: {Phone}</>
  ),
  "Get in Touch Form": ({ Name, Email, Message }) => (
    <>Name: {Name}<br />Email: {Email}<br />Message: {Message}</>
  ),
  "Newsletter Form": ({ Email }) => (
    <>Name: {Email.split("@")[0]}<br />Email: {Email}</>
  ),
};

const FormTemplate: React.FC<{ payload: FormPayload }> = ({ payload }) => {
  const TemplateComponent = templates[payload.formId];
  if (!TemplateComponent) {
    throw new Error('Invalid form ID');
  }
  return <TemplateComponent {...payload} />;
};

export default FormTemplate;
