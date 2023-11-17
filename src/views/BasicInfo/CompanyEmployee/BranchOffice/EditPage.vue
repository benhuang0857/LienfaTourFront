<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
import { ElButton } from 'element-plus'
import { useRoute } from 'vue-router'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { getOneApi, updateOneApi } from '@/api/basicInfo/branchoffice'

const { query } = useRoute()
const { formRegister, formMethods } = useForm()
const { getFormData, setSchema } = formMethods
const { t } = useI18n()
const loading = ref(true)

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

const setValue = async () => {
  const res = await getOneApi(query.id as string).catch(() => {})
  if (res) {
    setSchema([
      {
        field: 'field_area',
        path: 'value',
        value: res.data.branchoffice.area
      },
      {
        field: 'field_regNum',
        path: 'value',
        value: res.data.branchoffice.registration_number
      },
      {
        field: 'field_abbrName',
        path: 'value',
        value: res.data.branchoffice.brand_name
      },
      {
        field: 'field_fchName',
        path: 'value',
        value: res.data.branchoffice.full_ch_name
      },
      {
        field: 'field_fenName',
        path: 'value',
        value: res.data.branchoffice.full_en_name
      },
      {
        field: 'field_brandchName',
        path: 'value',
        value: res.data.branchoffice.brand_name
      },
      {
        field: 'field_guiNum',
        path: 'value',
        value: res.data.branchoffice.gui_number
      },
      {
        field: 'field_taxNum',
        path: 'value',
        value: res.data.branchoffice.tax_number
      },
      {
        field: 'field_airplaneTicket',
        path: 'value',
        value: res.data.branchoffice.airplane_ticket_available
      },
      {
        field: 'field_transferConsistency',
        path: 'value',
        value: res.data.branchoffice.transfer_consistency
      },
      {
        field: 'field_transferToken',
        path: 'value',
        value: res.data.branchoffice.transfer_token
      },
      {
        field: 'field_transferDecrypt',
        path: 'value',
        value: res.data.branchoffice.transfer_decrypt
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
