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
  uid,
  code,
}: {
  uid: string;
  code: string;
}) {
  fetch(`http://localhost:5500/api/colocataire`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      uid,
      code,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.type === "success") {
        window.location.href = "/auth/logout";
      }
    });
}
