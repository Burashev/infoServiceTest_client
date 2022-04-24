<template>
  <div class="grid">
    <app-card>
      <template v-slot:title>Send Application</template>
      <template v-slot:body>
        <app-form @submit="formSubmit">
          <div class="input-group">
            <label for="name">name</label>
            <input type="text" required placeholder="Name" id="name" v-model="name">
          </div>
          <div class="input-group">
            <label for="number">number</label>
            <input type="text" required placeholder="Name" id="number" v-model="number">
          </div>
          <div class="input-group">
            <label for="company">company</label>
            <input type="text" required placeholder="Name" id="company" v-model="company">
          </div>
          <div class="input-group">
            <label for="application_name">application name</label>
            <input type="text" required placeholder="Name" id="application_name" v-model="application_name">
          </div>
          <div class="input-group">
            <label for="message">message</label>
            <input type="text" required placeholder="Message" id="message" v-model="message">
          </div>
          <div class="input-group">
            <label for="file">file</label>
            <input type="file" required id="file" ref="file" @change="uploadFile">
          </div>
          <button type="submit">Send</button>
        </app-form>
      </template>
    </app-card>
    <app-card>
      <template v-slot:title>Your Applications</template>
      <template v-slot:body>
        <div class="table-wrapper">
          <table class="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Company</th>
              <th>Application Name</th>
              <th>Message</th>
              <th>file</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="application in applications" :key="application.id">
              <td>{{ application.name }}</td>
              <td>{{ application.number }}</td>
              <td>{{ application.company }}</td>
              <td>{{ application.application_name }}</td>
              <td>{{ application.message }}</td>
              <td>{{ application.file }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </template>
    </app-card>
  </div>
</template>

<script>
import AppCard from "@/components/AppCard";
import AppForm from "@/components/AppForm";
import {mapState} from "vuex";

export default {
  name: "Index",
  components: {AppForm, AppCard},
  data() {
    return {
      name: null,
      number: null,
      company: null,
      application_name: null,
      message: null,
      file: null,
    }
  },
  created() {
    this.$store.dispatch('user/getApplications')
  },
  computed: {
    ...mapState('user', ['applications']),
  },
  methods: {
    uploadFile() {
      this.file = this.$refs.file.files[0];
    },
    formSubmit() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('name', this.name);
      formData.append('number', this.number);
      formData.append('company', this.company);
      formData.append('application_name', this.application_name);
      formData.append('message', this.message);

      this.$store.dispatch('user/sendApplication', formData).then(() => {
        this.$store.dispatch('notification/createNotification', {
          text: 'Application created',
          error: false
        })
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 10px;
}

.table-wrapper {
  overflow: auto;
  height: 480px;

  .table {
    width: 100%;
    border: none;
    margin-bottom: 20px;
    border-collapse: collapse;

    thead {
      th {
        text-align: left;
        border: none;
        padding: 10px 15px;
        background: #d8d8d8;
      }

      tr {
        th:first-child {
          border-radius: 8px 0 0 8px;
        }

        th:last-child {
          border-radius: 0 8px 8px 0;
        }
      }
    }

    tbody {
      td {
        text-align: left;
        border: none;
        padding: 10px 15px;
        vertical-align: top;
      }

      tr:nth-child(even) {
        background: #f3f3f3;

        td:first-child {
          border-radius: 8px 0 0 8px;
        }

        td:last-child {
          border-radius: 0 8px 8px 0;
        }
      }
    }
  }
}
</style>
