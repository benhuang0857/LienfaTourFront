<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
import { ElButton, ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { getOneApi, updateOneApi } from '@/api/tourInfo/continent'

const { query } = useRoute()
const { formRegister, formMethods } = useForm()
const { getFormData, setSchema } = formMethods
const { t } = useI18n()
const loading = ref(true)

const schema = reactive<FormSchema[]>([
  {
    field: 'number',
    label: '洲別代碼',
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
  }
])

const setValue = async () => {
  const res = await getOneApi(query.id as string).catch(() => {})
  if (res) {
    setSchema([
      {
        field: 'number',
        path: 'value',
        value: res.data.continent.number
      },
      {
        field: 'ch_name',
        path: 'value',
        value: res.data.continent.ch_name
      },
      {
        field: 'en_name',
        path: 'value',
        value: res.data.continent.en_name
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
