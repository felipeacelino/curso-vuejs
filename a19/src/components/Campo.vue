<template>
  <div class="campo">
    <label :for="id">{{label}}</label>
    <input :type="type" :name="name" :id="id" :placeholder="placeholder" :required="required" />
  </div>
</template>

<script>
export default {
  name: "Campo",
  props: {
    label: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.campo {
  margin-bottom: 20px;
}
.campo label {
  display: block;
  font-weight: bold;
}
.campo input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.05);
  font-size: 16px;
}
.campo input:focus {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>