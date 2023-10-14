<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { getHeadquarterApi } from '@/api/basicInfo/headquarter'

const { formRegister, formMethods } = useForm()
const { setSchema, addSchema } = formMethods
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
  }
])

const setValue = async () => {
  const res = await getHeadquarterApi().catch(() => {})
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
        label: `公司負責人姓名-順位${element.id}`,
        component: 'Input',
        value: element.owner_name
      })
      addSchema({
        field: `field_ownerPhone_${element.id}`,
        label: `公司負責人電話-順位${element.id}`,
        component: 'Input',
        value: element.phone
      })
    })
    loading.value = false
  }
}

setValue()
</script>

<template>
  <ContentWrap :title="`${t('聯發國際旅行社有限公司')}`">
    <Form :schema="schema" @register="formRegister" />
  </ContentWrap>
</template>
