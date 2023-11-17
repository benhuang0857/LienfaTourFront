<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
import { ElButton, ElMessage } from 'element-plus'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { addOneApi } from '@/api/basicInfo/branchoffice'

const { formRegister, formMethods } = useForm()
const { getFormData } = formMethods
const { t } = useI18n()
const loading = ref(false)

const schema = reactive<FormSchema[]>([
  {
    field: 'field_area',
    label: '區域',
    component: 'Input'
  },
  {
    field: 'field_regNum',
    label: '同業代碼',
    component: 'Input'
  },
  {
    field: 'field_abbrName',
    label: '簡稱',
    component: 'Input'
  },
  {
    field: 'field_fchName',
    label: '中文完整名稱',
    component: 'Input'
  },
  {
    field: 'field_fenName',
    label: '英文完整名稱',
    component: 'Input'
  },
  {
    field: 'field_brandchName',
    label: '中文品牌名稱',
    component: 'Input'
  },
  {
    field: 'field_guiNum',
    label: '統一編號',
    component: 'Input'
  },
  {
    field: 'field_taxNum',
    label: '稅籍編號',
    component: 'Input'
  },
  {
    field: 'field_airplaneTicket',
    label: '可開機票',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '可以',
          value: 'true'
        },
        {
          label: '不行',
          value: 'false'
        }
      ]
    }
  },
  {
    field: 'field_transferConsistency',
    label: '代轉一致性',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '可以',
          value: 'true'
        },
        {
          label: '不行',
          value: 'false'
        }
      ]
    }
  },
  {
    field: 'field_transferToken',
    label: '電子代轉金鑰',
    component: 'Input'
  },
  {
    field: 'field_transferDecrypt',
    label: '電子代轉解密',
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
