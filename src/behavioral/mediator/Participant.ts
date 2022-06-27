class Participant {
  messages: string[];
  constructor(readonly name: string) {
    this.messages = [];
  }

  receive(participant: Participant, message: string) {
    this.messages.push(
      `Participant ${this.name}: received message: ${message}, from participant: ${participant.name}`
    );
  }
}

export default Participant;
