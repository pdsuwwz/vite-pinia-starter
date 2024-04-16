
import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import {
  createProject,
  getProjectDetail,
  getProjectList,
  updateTogglePublishStatus
} from '@/modules/Project/api'
import {
  projectDetail,
  projectList
} from '@/modules/Project/data'

export const useProjectStore = defineStore('Project', {
  state: () => {
    return {
      demoList: {},
      projectList: [],
      projectDetail: {
        corpName: '',
        createTime: '',
        id: '',
        isPublished: true,
        name: '',
        notes: ''
      }
    }
  },
  getters: {
    // demoList: (state) => state.demoList
  },
  actions: {
    async getSearchProjectByQuery (query) {
      await sleep(300)
      const res = await getProjectList(query)
      return this.filterResponse(res, null, () => {})
    },
    async getProjectList (params) {
      await sleep(300)
      // const res = await getProjectList(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {
          projectList
        }
      }
      console.log(this.hello)
      return this.filterResponse(res, () => {
        this.projectList = res.data.projectList
      }, () => {})
    },
    async createProject (params) {
      // const res = await createProject(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {}
      }
      await sleep(500)
      return this.filterResponse(res, () => {
        this.projectList.push(JSON.parse(JSON.stringify(projectDetail)))
      })
    },
    async updateTogglePublishStatus (params) {
      const res = await updateTogglePublishStatus(params)
      return this.filterResponse(res, null)
    }
  }
})

