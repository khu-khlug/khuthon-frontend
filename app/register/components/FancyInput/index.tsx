"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import styles from "./style.module.css";

export interface FancyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
}

const FancyInput = forwardRef<HTMLInputElement, FancyInputProps>(
  ({ label, description, error, className, ...props }, ref) => {
    return (
      <div className={styles["input-container"]}>
        {label && <label className={styles.label}>{label}</label>}
        {description && (
          <div className={styles.description}>{description.split("\n")}</div>
        )}
        <div
          className={classNames(styles["input-wrapper"], {
            [styles.error]: !!error,
          })}
        >
          <input
            ref={ref}
            className={classNames(styles.input, className)}
            {...props}
          />
        </div>
        {error && <div className={styles["error-message"]}>{error}</div>}
      </div>
    );
  }
);

FancyInput.displayName = "FancyInput";

export default FancyInput;
