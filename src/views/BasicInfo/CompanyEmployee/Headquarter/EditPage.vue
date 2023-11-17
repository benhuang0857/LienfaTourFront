<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
import { ElButton, ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { getOneApi, updateOneApi } from '@/api/basicInfo/headquarter'

const { query } = useRoute()
const { formRegister, formMethods } = useForm()
const { getFormData, setSchema, addSchema } = formMethods
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
        value: res.data.headquarter.area
      },
      {
        field: 'field_regNum',
        path: 'value',
        value: res.data.headquarter.registration_number
      },
      {
        field: 'field_abbrName',
        path: 'value',
        value: res.data.headquarter.brand_name
      },
      {
        field: 'field_fchName',
        path: 'value',
        value: res.data.headquarter.full_ch_name
      },
      {
        field: 'field_fenName',
        path: 'value',
        value: res.data.headquarter.full_en_name
      },
      {
        field: 'field_brandchName',
        path: 'value',
        value: res.data.headquarter.brand_name
      },
      {
        field: 'field_guiNum',
        path: 'value',
        value: res.data.headquarter.gui_number
      },
      {
        field: 'field_taxNum',
        path: 'value',
        value: res.data.headquarter.tax_number
      },
      {
        field: 'field_airplaneTicket',
        path: 'value',
        value: res.data.headquarter.airplane_ticket_available
      },
      {
        field: 'field_transferConsistency',
        path: 'value',
        value: res.data.headquarter.transfer_consistency
      },
      {
        field: 'field_transferToken',
        path: 'value',
        value: res.data.headquarter.transfer_token
      },
      {
        field: 'field_transferDecrypt',
        path: 'value',
        value: res.data.headquarter.transfer_decrypt
      },
      {
        field: 'field_ownerName',
        path: 'value',
        value: res.data.owner[0].owner_name
      },
      {
        field: 'field_ownerPhone',
        path: 'value',
        value: res.data.owner[0].phone
      }
    ])
    res.data.owner.forEach((element) => {
      addSchema({
        field: `field_ownerName_${element.id}`,
        label: `公司負責人姓名-順位${element.priority}`,
        component: 'Input',
        value: element.owner_name
      })
      addSchema({
        field: `field_ownerPhone_${element.id}`,
        label: `公司負責人電話-順位${element.priority}`,
        component: 'Input',
        value: element.phone
      })
    })
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
