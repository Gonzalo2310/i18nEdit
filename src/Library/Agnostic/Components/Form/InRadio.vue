<template>
  <div>
    <RadioGroup v-model="changedSelection" v-if="ui ==='iview'">
      <Radio v-for="option in options"
             :key="option[value]"
             :label="option[value]">{{option[title]}}</Radio>
    </RadioGroup>
    <el-radio-group v-model="changedSelection" v-if="ui === 'element' ">
      <el-radio v-for="option in options"
                :key="option[value]"
                :label="option[value]">{{option[title]}}</el-radio>
    </el-radio-group>
  </div>

</template>

<script>
export default {
  name: 'InRadio',
  props: {
    options: {
      type: Array,
      required: true
    },
    preselect: {
      type: [String, Number],
      required: false,
      default: -1
    },
    preselectIndex: {
      type: Number,
      required: false,
      default: -1
    },
    title: {
      type: String,
      required: false,
      default: 'title'
    },
    value: {
      type: String,
      required: false,
      default: 'value'
    }
  },
  data () {
    return {
      internalSelectObject: {},
      currentValue: 0
    }
  },
  computed: {
    changedSelection: {
      get () {
        return this.currentValue
      },
      set (value) { console.log(value) }
    }
  }
}
</script>
