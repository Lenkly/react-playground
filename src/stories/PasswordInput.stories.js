import React from "react";
import PasswordInput from "../components/PasswordInput";

export default {
  title: "PasswordInput",
  component: PasswordInput
};

export const Empty = () => <PasswordInput value="" />;
export const superUnsafe = () => <PasswordInput value="a" />;
export const NotSoSafe = () => <PasswordInput value="ab" />;
export const NotSafe = () => <PasswordInput value="abc" />;
export const HalfSafe = () => <PasswordInput value="abcd" />;
export const AlmostSafe = () => <PasswordInput value="abcde" />;
export const Safe = () => <PasswordInput value="abcdef" />;
export const Safer = () => <PasswordInput value="abcdefg" />;
export const SuperSafe = () => <PasswordInput value="abcdefgh" />;
export const MegaSafe = () => <PasswordInput value="abcdefghi" />;
export const UltraSafe = () => <PasswordInput value="abcdefghij" />;
