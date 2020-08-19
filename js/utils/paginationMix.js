export default {
  data() {
    return {
      // 分页数据
      pagination: {
        loading: false,
        pageNo: 1,
        pageSize: 10,
        total: 0,
        pageSizeArr: [10, 20, 50, 100]
      }
    }
  },
  methods: {
    onSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagination.pageSize = val
      this.pagination.pageNo = 1
      this.getList()
    },
    onCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.pagination.pageNo = val
      this.getList()
    },
    fetchList(api, data, option = { tableData: 'tableData' }) {
      this[option.tableData] = []
      this.pagination.loading = true
      const { pageNo, pageSize } = this.pagination

      api(Object.assign({ pageNo, pageSize }, data)).then(res => {
        const { records, current: pageNo, size: pageSize, total } = res.data
        this[option.tableData] = records
        Object.assign(this.pagination, { pageNo, pageSize, total })
      }).catch(_ => {
        // this.$message.error(err.msg)
        Object.assign(this.pagination, { total: 0 })
      }).finally(res => {
        this.pagination.loading = false
      })
    }
  }
}
