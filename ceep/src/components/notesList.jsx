import React, { Component } from "react";
import { NoteCard } from "./noteCard";

export class NotesList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Work", "Work", "Study").map((category, index) => {
          return (
            <li key={index}>
              <div>{category}</div>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}
