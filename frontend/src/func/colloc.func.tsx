export function createColloc({
  name,
  code,
  expense,
}: {
  name: string;
  code: number;
  expense: number;
}) {
  fetch("http://localhost:5000/api/colocation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      code,
      expense,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

export function joinColloc({
  userUid,
  code,
}: {
  userUid: string;
  code: string;
}) {
  fetch(`http://localhost:5000/api/colocataire`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      userUid,
      code,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
