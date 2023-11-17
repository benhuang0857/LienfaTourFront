<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { useI18n } from '@/hooks/web/useI18n'
import { ElButton } from 'element-plus'
import { Table } from '@/components/Table'
import { getAllApi } from '@/api/basicInfo/headquarter'
import { useTable } from '@/hooks/web/useTable'
import { TableData } from '@/api/table/types'
import { reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useEmitt } from '@/hooks/event/useEmitt'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'

defineOptions({
  name: 'ExamplePage'
})

const { push } = useRouter()

const ids = ref<string[]>([])

const searchParams = ref({})
const setSearchParams = (params: any) => {
  searchParams.value = params
  getList()
}

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const res = await getAllApi()
    return {
      list: res.data.headquarter,
      total: res.data.total
    }
  }
})
const { loading, dataList, total, currentPage, pageSize } = tableState
const { getList, getElTableExpose, delList } = tableMethods

getList()

useEmitt({
  name: 'getList',
  callback: (type: string) => {
    if (type === 'add') {
      currentPage.value = 1
    }
    getList()
  }
})

const { t } = useI18n()

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'selection',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      type: 'selection'
    }
  },
  {
    field: 'index',
    label: t('序號'),
    type: 'index',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    }
  },
  {
    field: 'full_ch_name',
    label: t('公司名稱'),
    search: {
      component: 'Input'
    },
    form: {
      component: 'Input',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'area',
    label: t('區域'),
    search: {
      hidden: true
    }
  },
  {
    field: 'created_at',
    label: t('創建時間'),
    search: {
      hidden: true
    },
    form: {
      component: 'DatePicker',
      componentProps: {
        type: 'datetime',
        valueFormat: 'YYYY-MM-DD HH:mm:ss'
      }
    }
  },
  {
    field: 'action',
    width: '260px',
    label: t('tableDemo.action'),
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return (
            <>
              <ElButton type="primary" onClick={() => action(data.row, 'edit')}>
                {t('編輯')}
              </ElButton>
              <ElButton type="success" onClick={() => action(data.row, 'detail')}>
                {t('查看')}
              </ElButton>
              <ElButton type="danger" onClick={() => delData(data.row)}>
                {t('刪除')}
              </ElButton>
            </>
          )
        }
      }
    }
  }
])

// @ts-ignore
const { allSchemas } = useCrudSchemas(crudSchemas)

const AddAction = () => {
  push('/basic-info/company-employee/headquarter-add')
}

const delLoading = ref(false)

const delData = async (row: TableData | null) => {
  const elTableExpose = await getElTableExpose()
  ids.value = row ? [row.id] : elTableExpose?.getSelectionRows().map((v: TableData) => v.id) || []
  delLoading.value = true
  await delList(unref(ids).length).finally(() => {
    delLoading.value = false
  })
}

const action = (row: TableData, type: string) => {
  push(`/basic-info/company-employee/headquarter-${type}?id=${row.id}`)
}
</script>

<template>
  <ContentWrap>
    <Search :schema="allSchemas.searchSchema" @search="setSearchParams" @reset="setSearchParams" />

    <div class="mb-10px">
      <ElButton type="primary" @click="AddAction">{{ t('exampleDemo.add') }}</ElButton>
      <ElButton :loading="delLoading" type="danger" @click="delData(null)">
        {{ t('exampleDemo.del') }}
      </ElButton>
    </div>

    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="allSchemas.tableColumns"
      :data="dataList"
      :loading="loading"
      :pagination="{
        total: total
      }"
      @register="tableRegister"
    />
  </ContentWrap>
</template>
@/hooks/event/useEmitt
