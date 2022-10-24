import { Button, Text } from "../index.js";

const ClearHistory = ({ setIsOpen, setSuccess }) => {
  const onSubmit = () => {
    setSuccess(true);

    setTimeout(() => {
      setIsOpen(false);
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <Text className="text-2xl font-semibold text-tGray-700 text-center">
        Are you sure you want to clear the history of this project
      </Text>

      <Button purpose="blue" onClick={onSubmit}>
        Yes Im sure to clear history
      </Button>

      <Text
        onClick={() => setIsOpen(false)}
        className="text-base font-medium text-tGray-700 text-center cursor-pointer"
      >
        Cancel
      </Text>
    </div>
  );
};

export default ClearHistory;
