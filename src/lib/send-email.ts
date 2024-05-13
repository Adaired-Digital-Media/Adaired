type Data = {
  formId: string;
  Name?: string;
  Email?: string;
  Phone?: string;
  Interest?: string;
  Budget?: string;
  Message?: string;
  terms?: boolean;
};
export function formSubmission(data: Data) {
  const apiEndpoint = "/api/formMailer";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
