import React, { useState } from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";

function MyModal(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [monthlyLeads, setMonthlyLeads] = useState("");
  const [crmLeads, setCrmleads] = useState("");
  const [crm, setCrm] = useState("");
  const [agents, setAgents] = useState("");
  const [src, setSrc] = useState("0");
  const [hearAboutUs, setHearAboutUs] = useState("0");

  function resetStates() {
    setName("");
    setEmail("");
    setPhone("");
    setMonthlyLeads("");
    setCrmleads("");
    setCrm("");
    setAgents("");
    setHearAboutUs("");
    setSrc("");
  }

  function submit(e) {
    setOpen(false);
    alert(
      "Name : " +
        name +
        "\n" +
        "Email Address: " +
        email +
        "\n" +
        "Phone No. : " +
        phone +
        "\n" +
        "Number of leads you generate in a month : " +
        monthlyLeads +
        "\n" +
        "Total leads in your CRM : " +
        crmLeads +
        "\n" +
        "Which CRM do you use  : " +
        crm +
        "\n" +
        "Number of agents : " +
        agents +
        "\n" +
        "What are your biggest sources : " +
        src +
        "\n" +
        "How did you hear about us : " +
        hearAboutUs +
        "\n"
    );
    resetStates();
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={ <Button inverted color='orange' style={{ marginTop :"5%" , width:"100%"}}> Start Your Trail </Button>}
    >
      <Modal.Header labelPosition="center">
        Get Started with SquadVoice
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
  <Header>Plan Selected: {props.plan_selected}</Header>
          <Form>
            <Form.Group>
              <Form.Input
                label="Name"
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                width={16}
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="E-mail Address"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width={8}
              />
              <Form.Input
                label="Phone No."
                placeholder="Phone No."
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                width={8}
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="Number of leads you generate in a month"
                type="number"
                placeholder="0"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(e.target.value)}
                width={8}
              />
              <Form.Input
                label="Total leads in your CRM"
                type="number"
                placeholder="0"
                value={crmLeads}
                onChange={(e) => setCrmleads(e.target.value)}
                width={8}
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="Which CRM do you use ?"
                type="number"
                placeholder="0"
                value={crm}
                onChange={(e) => setCrm(e.target.value)}
                width={8}
              />
              <Form.Input
                label="Number of agents"
                type="number"
                placeholder="0"
                value={agents}
                onChange={(e) => setAgents(e.target.value)}
                width={8}
              />
            </Form.Group>

            <Header as="h3">What are your biggest sources</Header>
            <Form.Group inline>
              <Form.Field
                label="Zillow"
                value="1"
                control="input"
                type="checkbox"
                checked={src === "Zillow"}
                onChange={(e) =>
                  src === "Zillow" ? setSrc("") : setSrc("Zillow")
                }
              />
              <Form.Field
                label="Realtor"
                value="2"
                control="input"
                type="checkbox"
                checked={src === "Realtor"}
                onChange={(e) =>
                  src === "Realtor" ? setSrc("") : setSrc("Realtor")
                }
              />
              <Form.Field
                label="Ylopo"
                value="3"
                control="input"
                type="checkbox"
                checked={src === "Ylopo"}
                onChange={(e) =>
                  src === "Ylopo" ? setSrc("") : setSrc("Ylopo")
                }
              />
              <Form.Field
                label="Others"
                value="4"
                control="input"
                type="checkbox"
                checked={src === "Others"}
                onChange={(e) =>
                  src === "Others" ? setSrc("") : setSrc("Others")
                }
              />
            </Form.Group>

            <Header as="h4">How did you hear about us </Header>
            <Form.Group inline>
              <Form.Field
                label="Google"
                value="1"
                control="input"
                type="checkbox"
                checked={hearAboutUs === "1"}
                onChange={(e) =>
                  hearAboutUs === "1" ? setHearAboutUs("") : setHearAboutUs("1")
                }
              />
              <Form.Field
                label="Facebook"
                value="2"
                control="input"
                type="checkbox"
                checked={hearAboutUs === "2"}
                onChange={(e) =>
                  hearAboutUs === "2" ? setHearAboutUs("") : setHearAboutUs("2")
                }
              />
              <Form.Field
                label="Email"
                value="3"
                control="input"
                type="checkbox"
                checked={hearAboutUs === "3"}
                onChange={(e) =>
                  hearAboutUs === "3" ? setHearAboutUs("") : setHearAboutUs("3")
                }
              />
              <Form.Field
                label="Friends"
                value="4"
                control="input"
                type="checkbox"
                checked={hearAboutUs === "4"}
                onChange={(e) =>
                  hearAboutUs === "4" ? setHearAboutUs("") : setHearAboutUs("4")
                }
              />
              <Form.Field
                label="Real Closers"
                value="5"
                control="input"
                type="checkbox"
                checked={hearAboutUs === "5"}
                onChange={(e) =>
                  hearAboutUs === "5" ? setHearAboutUs("") : setHearAboutUs("5")
                }
              />
            </Form.Group>

            <Button type="submit" color="orange" onClick={submit}>
              Submit
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default MyModal;