import React from "react";

type AwardResultProps = {
  prizeName: string;
  prize: string;
  children: React.ReactNode;
};

export function AwardResult({ prizeName, prize, children }: AwardResultProps) {
  return (
    <div>
      <h5>{prizeName}</h5>
      <ul>
        <li>{prize}</li>
      </ul>
      <div className="list mb-12">
        <ul>
          {React.Children.toArray(children).map((child, i) => (
            <li className="item" key={`AwardResult/${i}`}>
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
