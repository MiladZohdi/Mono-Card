import Input from "./Input";

import { personOutline } from "ionicons/icons";
import { cardOutline } from "ionicons/icons";
import { calendarOutline } from "ionicons/icons";
import { lockClosedOutline } from "ionicons/icons";

export default function CardDetails({
  onNameChange,
  name,
  onCardChange,
  cardNumber,
  onExpCahnge,
  expDate,
  onCvvChange,
  cvv,
}) {
  return (
    <form className="input-container">
      <h1>Paymetn Details:</h1>
      <Input
        iconName={personOutline}
        palceHolder="John Miller"
        type="text"
        change={onNameChange}
        value={name}
      >
        CardHolder name:
      </Input>
      <Input
        iconName={cardOutline}
        palceHolder="0000 0000 0000 0000"
        type="text"
        change={onCardChange}
        value={cardNumber}
      >
        card number:
      </Input>
      <Input
        iconName={calendarOutline}
        palceHolder="01/24"
        type="text"
        change={onExpCahnge}
        value={expDate}
      >
        EXP date:
      </Input>
      <Input
        iconName={lockClosedOutline}
        type="password"
        change={onCvvChange}
        value={cvv}
      >
        cvv:
      </Input>
      <button>Confirm</button>
    </form>
  );
}
