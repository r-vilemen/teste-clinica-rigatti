import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Button from "@/components/Button";
import {
  DashboardWrapper,
  Greeting,
  SectionTitle,
  ScheduleList,
  ScheduleItem,
  Label,
} from "@/ui/styles/Pages/dashboard/styles";

interface Agendamento {
  id: string;
  especialidade: string;
  data: string;
  status: "pendente" | "aprovado" | "reprovado";
}

export default function Dashboard() {
  const [nome, setNome] = useState("");
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const router = useRouter();

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("username");
    if (!nomeSalvo) {
      router.push("/login");
      return;
    }

    setNome(nomeSalvo);

    setAgendamentos([
      {
        id: "1",
        especialidade: "Endocrinologia",
        data: "2025-06-15 14:00",
        status: "pendente",
      },
      {
        id: "2",
        especialidade: "Nutrição",
        data: "2025-06-20 10:00",
        status: "aprovado",
      },
    ]);
  }, [router]);

  return (
    <>
      <Container>
        <DashboardWrapper>
          <Greeting>Olá, {nome}</Greeting>

          <SectionTitle>Seus agendamentos:</SectionTitle>

          {agendamentos.length === 0 ? (
            <p>Você ainda não possui agendamentos.</p>
          ) : (
            <ScheduleList>
              {agendamentos.map((item) => (
                <ScheduleItem key={item.id}>
                  <Label>Especialidade:</Label> {item.especialidade} <br />
                  <Label>Data:</Label> {item.data} <br />
                  <Label>Status:</Label>{" "}
                  {item.status === "pendente"
                    ? "Pendente"
                    : item.status === "aprovado"
                    ? "Aprovado"
                    : "Reprovado"}
                </ScheduleItem>
              ))}
            </ScheduleList>
          )}

          <Button onClick={() => router.push("/agendar")}>
            Agendar nova consulta
          </Button>
        </DashboardWrapper>
      </Container>
    </>
  );
}
