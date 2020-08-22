<template>
  <div class="local-storage">
    <h1>Local Storage</h1>
    <p>You can take a note here, you can also remove a note when it is not used anymore.</p>
    <div class="container">
      <table class="table table-bordered">
        <tbody>
          <tr v-for="(note, n) in notes" v-bind:key="n">
            <td class="note">{{ note }}</td>
            <td><button class="btn btn-danger" @click="removeNote(n)">Remove</button></td>
          </tr>
        </tbody>
      </table>

      <div class="input-group mx-auto" style="width: 500px">
        <input type="text" class="form-control" placeholder="Write a note..." v-model="newNote">
        <div class="input-group-append">
          <button class="btn btn-success" @click="addNote">Add Note</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        notes: [],
        newNote: null
      }
    },
    mounted() {
      if (localStorage.getItem('notes')) {
        try {
          this.notes = JSON.parse(localStorage.getItem('notes'));
        } catch(e) {
          localStorage.removeItem('notes');
        }
      }
    },
    methods: {
      addNote() {
        // ensure they actually typed something
        if (!this.newNote) {
          return;
        }

        this.notes.push(this.newNote);
        this.newNote = '';
        this.saveNotes();
      },
      removeNote(x) {
        this.notes.splice(x, 1);
        this.saveNotes();
      },
      saveNotes() {
        const parsed = JSON.stringify(this.notes);
        localStorage.setItem('notes', parsed);
      }
    }
  }
</script>