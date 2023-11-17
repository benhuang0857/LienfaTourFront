<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
import { ElButton, ElMessage } from 'element-plus'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { addOneApi } from '@/api/tourInfo/city'

const { formRegister, formMethods } = useForm()
const { getFormData } = formMethods
const { t } = useI18n()
const loading = ref(false)

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
    component: 'Input'
  },
  {
    field: 'telarea_code',
    label: '電話區碼',
    component: 'Input'
  }
])

const save = async () => {
  const formData = await getFormData()
  const res = await addOneApi(formData)
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
