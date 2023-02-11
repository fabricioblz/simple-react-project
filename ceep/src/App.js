import { NotesList } from "./components/notesList";
import { NotesForm } from "./components/notesForm";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <section>
        <NotesForm />
        <NotesList />
      </section>
    );
  }
}

export default App;
