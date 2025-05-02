"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

import styles from "./style.module.css";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  description?: string;
  error?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, Props>(
  ({ label, description, error, className, children, ...props }, ref) => {
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
          <select ref={ref} className={styles.input} {...props}>
            {children}
          </select>
        </div>
        {error && <div className={styles["error-message"]}>{error}</div>}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
