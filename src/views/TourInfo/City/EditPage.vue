<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
import { ElButton, ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { getCountryOptionApi } from '@/api/tourInfo/country'
import { getOneApi, updateOneApi } from '@/api/tourInfo/city'

const { query } = useRoute()
const { formRegister, formMethods } = useForm()
const { getFormData, setSchema } = formMethods
const { t } = useI18n()
const loading = ref(true)

interface Option {
  label: string
  value: string
}

const countryOption: Option[] = []

const schema = reactive<FormSchema[]>([
  {
    field: 'number',
    label: '城市代碼',
    component: 'Input'
  },
  {
    field: 'ch_name',
    label: '中文名稱',
    component: 'Input'
  },
  {
    field: 'en_name',
    label: '英文名稱',
    component: 'Input'
  },
  {
    field: 'country_id',
    label: '國家',
    component: 'Select',
    componentProps: {
      options: countryOption
    }
  },
  {
    field: 'telarea_code',
    label: '電話區碼',
    component: 'Input'
  }
])

const countries = async () => {
  let result = await getCountryOptionApi().catch(() => {})
  result['data']['country'].forEach(function (ele) {
    let op: Option = {
      label: ele.ch_name,
      value: `${ele.id}`
    }
    countryOption.push(op)
  })
  return result
}

const setValue = async () => {
  countries()
  const res = await getOneApi(query.id as string).catch(() => {})
  if (res) {
    setSchema([
      {
        field: 'number',
        path: 'value',
        value: res.data.city.number
      },
      {
        field: 'ch_name',
        path: 'value',
        value: res.data.city.ch_name
      },
      {
        field: 'en_name',
        path: 'value',
        value: res.data.city.en_name
      },
      {
        field: 'country_id',
        path: 'value',
        value: res.data.city.country_id
      },
      {
        field: 'telarea_code',
        path: 'value',
        value: res.data.city.telarea_code
      }
    ])
    loading.value = false
  }
}

setValue()

const save = async () => {
  const formData = await getFormData()
  console.log(formData)
  const res = await updateOneApi(query.id as string, formData)
    .catch(() => {})
    .finally(() => {
      loading.value = false
    })
  if (res) {
    ElMessage.success(t('更新完畢'))
    console.log(res)
  }
}
</script>

<template>
  <ContentWrap :title="`${t('聯發國際旅行社有限公司')}`">
    <Form :schema="schema" @register="formRegister" />
    <template #header>
      <ElButton type="primary" :loading="loading" @click="save">
        {{ t('exampleDemo.save') }}
      </ElButton>
    </template>
  </ContentWrap>
</template>
