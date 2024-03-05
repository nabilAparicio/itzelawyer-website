"use server";

export async function submitForm(data: FormData) {
  await fetch("http://localhost:3000/api/send-email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => console.log(res));
  return;
}
