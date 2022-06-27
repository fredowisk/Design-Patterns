import Channel from "../../../src/behavioral/mediator/Channel";
import Participant from "../../../src/behavioral/mediator/Participant";

test("should create a chat between participants", () => {
  const participantA = new Participant("A");
  const participantB = new Participant("B");
  const participantC = new Participant("C");

  participantB.receive(participantA, "Hello");
  participantC.receive(participantA, "Hello");
  expect(participantB.messages[0]).toBe(
    "Participant B: received message: Hello, from participant: A"
  );
  expect(participantC.messages[0]).toBe(
    "Participant C: received message: Hello, from participant: A"
  );
});

test("should create a chat romm between participants", () => {
  const participantA = new Participant("A");
  const participantB = new Participant("B");
  const participantC = new Participant("C");
  const channel = new Channel();

  channel.register(participantA);
  channel.register(participantB);
  channel.register(participantC);
  channel.broadcast(participantA, "Hello");

  expect(participantB.messages[0]).toBe(
    "Participant B: received message: Hello, from participant: A"
  );
  expect(participantC.messages[0]).toBe(
    "Participant C: received message: Hello, from participant: A"
  );
});

test("should send a message to a specific participant", () => {
  const participantA = new Participant("A");
  const participantB = new Participant("B");
  const channel = new Channel();

  channel.register(participantA);
  channel.register(participantB);
  channel.message(participantA, participantB, "Hello");

  expect(participantB.messages[0]).toBe(
    "Participant B: received message: Hello, from participant: A"
  );
});
