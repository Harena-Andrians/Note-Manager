import axios from "axios";

const BASE_URL = " http://localhost:3300/notes";

export class NoteAPI {
  static async fetchAll() {
    return ((await axios.get(`${BASE_URL}`)).data).map(note=>this.idToString(note));
  }
  static async create(note) {
    return this.idToString((await axios.post(`${BASE_URL}`, note)).data);
  }
  static async update(note){
    return this.idToString((await axios.patch(`${BASE_URL}/${note.id}`, note)).data)
  }
  static async delete(noteId){
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data
  }

  static idToString(note) {
    return { ...note, id: note.id.toString() };
  }
}
