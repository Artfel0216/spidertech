"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FloatingInput({ label, id, error, required, ...props }: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        required={required}
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value !== "");
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setHasValue(e.target.value !== "");
          props.onChange?.(e);
        }}
        className={`w-full rounded-xl border px-4 pt-5 pb-2 text-sm text-white outline-none transition-colors peer ${
          error
            ? "border-red-500/40 focus:border-red-500/60"
            : "border-white/10 focus:border-neon-blue/40"
        } bg-white/3`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all pointer-events-none ${
          focused || hasValue
            ? "top-1.5 text-[10px]"
            : "top-3.5 text-sm"
        } ${error ? "text-red-400" : focused ? "text-neon-blue" : "text-zinc-600"}`}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {error && (
        <p className="mt-1 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}

interface FloatingTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function FloatingTextarea({ label, id, error, required, ...props }: FloatingTextareaProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <textarea
        id={id}
        required={required}
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value !== "");
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setHasValue(e.target.value !== "");
          props.onChange?.(e);
        }}
        className={`w-full resize-none rounded-xl border px-4 pt-5 pb-2 text-sm text-white outline-none transition-colors peer ${
          error
            ? "border-red-500/40 focus:border-red-500/60"
            : "border-white/10 focus:border-neon-blue/40"
        } bg-white/3`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all pointer-events-none ${
          focused || hasValue
            ? "top-1.5 text-[10px]"
            : "top-3.5 text-sm"
        } ${error ? "text-red-400" : focused ? "text-neon-blue" : "text-zinc-600"}`}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {error && (
        <p className="mt-1 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}
