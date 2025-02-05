import { useState } from "react";

type NotificationControlProps = {
  isDisabled?: boolean;
};

const NotificationControl = ({ isDisabled }: NotificationControlProps) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between shadow-medium px-5 py-3 rounded-sm">
      <p>Notification</p>
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            disabled={isDisabled}
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
          <div className="w-[51px] h-[31px] bg-neutral-active rounded-full peer-checked:bg-success transition duration-300"></div>
          <div className="absolute top-[1px] left-[2px] w-[27px] h-[27px] shadow-medium bg-white rounded-full transition duration-300 peer-checked:translate-x-5"></div>
        </label>
      </div>
    </div>
  );
};

export default NotificationControl;
