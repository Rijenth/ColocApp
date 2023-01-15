import { useEffect, useState } from 'react';
import { decodeJwt } from 'jose';
import { Title, Text, Stack } from '@mantine/core';
export default function BigNum({ type }: { type: string }) {

  const [bigNum, setBigNum] = useState(0);

  useEffect(() => {
    const colocationId = decodeJwt(sessionStorage.getItem("ColocUser")).sub.colocation;
    fetch(`http://localhost:5500/api/expense/colocation/${colocationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    ).then((response) => response.json())
      .then((res) => {
        let data: ExpensePayload[] = [];
        res[0].map((item: ExpensePayload) => {
          const expense: ExpensePayload = {
            id: item.id,
            amount: item.amount,
            colocataireId: item.colocataireId,
            firstName: item.firstName,
            createdAt: item.createdAt,
            paidFor: item.paidFor,
            description: item.description,
            colocationId: item.colocationId,
          };
          data.push(expense);
        });
        // bigNum is equal to the sum of all the expenses
        setBigNum(data.reduce((acc, expense) => acc + expense.amount, 0));
      })
      .catch((error) => {
        console.log(error);
      }
      );
  })
  return (
    <div className={`dashboard__${type}`}>
      <Stack direction="column" spacing="md">
        <Title order={1}>{bigNum}</Title>
        <Text weight={400}>has been paid</Text>
      </Stack>
    </div>
  );
}
