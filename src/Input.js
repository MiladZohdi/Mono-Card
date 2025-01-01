import { IonIcon } from "@ionic/react";

export default function Input({
  iconName,
  palceHolder,
  type,
  change,
  value,
  children,
}) {
  return (
    <div className="input">
      <label>{children}</label>
      <div className="input-wrapper">
        <IonIcon icon={iconName} className="icon" />
        <input
          type={type}
          placeholder={palceHolder}
          value={value}
          onChange={(e) => change(e.target.value)}
          required
        />
      </div>
    </div>
  );
}
