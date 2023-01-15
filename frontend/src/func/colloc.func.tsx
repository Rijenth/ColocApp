export function createColloc({
  name,
  code,
  rentDue,
}: {
  name: string;
  code: number;
  rentDue: number;
}) {
  fetch("http://localhost:5500/api/colocation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      code,
      rentDue,
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
  fetch(`http://localhost:5500/api/colocataire`, {
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
