<template>
  <div>
    <button @click="open=true">Abrir Modal</button>
    <transition name="modal">
      <div class="modal" v-show="open">
        <div class="modal-wrap">
          <h1>Modal</h1>
          <p>Este é o modal. Clique abaixo para fechar.</p>
          <button @click="open=false">Fechar</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.modal {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-wrap {
  width: 100%;
  max-width: 600px;
  padding: 40px;
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  text-align: center;
}
.modal-enter-active,
.modal-leave-active {
  transition: 0.5s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-to .modal-wrap {
  animation: fadeIn 0.5s;
}
.modal-leave-to .modal-wrap {
  animation: fadeIn 0.5s reverse;
}

@keyframes fadeIn {
  from {
    transform: translate3d(0, -50px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
