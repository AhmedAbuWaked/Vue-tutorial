import Vue from 'vue';

//Make format Custom Directive
Vue.directive('format', {

    bind: function (el, binding) {
        el.style.fontSize = binding.value + 'px';
        console.log(`Directive Name = ${binding.name}`);

        //Bold Modifier
        if (binding.modifiers.bold) {
            el.style.fontWeight = 'bold';
        }

        // Red Modifier
        if (binding.modifiers.red) {
            el.style.color = 'red';
        }
    }

});
