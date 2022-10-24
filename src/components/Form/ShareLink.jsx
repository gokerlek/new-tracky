import { Button, Input, Text } from "../index.js";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ShareLink = () => {
  const { handleSubmit, control, register } = useForm({
    reValidateMode: "onChange",
    delayError: 3000,
    defaultValues: {
      shareLink: "tracky.com/e23Vdsgkclsorg4tfgksrssdv",
    },
  });

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
    setIsCopied(true);
  };

  const onSubmit = (data) => {
    copyToClipboard(data.shareLink);
  };

  return (
    <div className="flex flex-col gap-4">
      <Text className="text-2xl font-semibold text-tGray-700 text-center">
        Share project via live link
      </Text>

      <Input
        purpose="shareLink"
        control={control}
        register={register}
        disabled
      />

      <Button purpose="blue" onClick={handleSubmit(onSubmit)}>
        {isCopied ? "Copied to clipboard" : "Copy"}
      </Button>
    </div>
  );
};

export default ShareLink;
