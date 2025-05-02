"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

import styles from "./style.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, description, error, className, ...props }, ref) => {
    return (
      <div className={classNames(styles["input-container"], className)}>
        {label && <label className={styles.label}>{label}</label>}
        {description && (
          <div className={styles.description}>{description.split("\n")}</div>
        )}
        <div
          className={classNames(styles["input-wrapper"], {
            [styles.error]: !!error,
          })}
        >
          <input ref={ref} className={styles.input} {...props} />
        </div>
        {error && <div className={styles["error-message"]}>{error}</div>}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
