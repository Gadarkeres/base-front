"use client";

import { helloWord } from "@/service/hello-word.service";
import { useEffect } from "react";

export default function Home() {
  const service = helloWord();

  const fetchData = async () => {
    service
      .request()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <main>
      <p>Hello World</p>
    </main>
  );
}
