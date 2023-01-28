import { FormEvent, useRef } from "react";
import { Mutate } from "../types";
import React from "react";
import Input from "../components/common/Input";
import Button from "./common/Button";
import tw from "twin.macro";

const styles = {
  InputLayout: [tw`justify-center flex`],
};

interface MsgInputProps {
  mutate: Mutate;
  text?: string;
  id?: string;
}

const MsgInput = ({ mutate, text = "", id = undefined }: MsgInputProps) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: FormEvent) => {
    if (!textRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = "";
    mutate({ text, id });
  };

  return (
    <form css={styles.InputLayout} onSubmit={onSubmit}>
      <Input
        variant="Create"
        ref={textRef}
        defaultValue={text}
        placeholder="Enter your content..."
      />
      <Button variant="Submit">POST</Button>
    </form>
  );
};

export default MsgInput;
