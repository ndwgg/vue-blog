<template>
  <ul class="contact-container">
    <li>
      <a href="https://gitee.com/ndwgg">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
    </li>
    <li>
      <a href="mailto:2336365486@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=2336365486&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.qqQrCode"
          alt="QQ联系方式加载失败"
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode"
          alt="微信联系方式加载失败"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";

.contact-container {
  list-style: none;
  margin: 0;
  padding: 0;
  color: @gray;
  padding-left: 20px;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    a {
      display: flex;
      align-items: center;
      height: 30px;
      cursor: pointer;
      font-size: 13px;
      .icon {
        font-size: 26px;
        margin-right: 10px;
        width: 36px;
        &.weixin {
          font-size: 32px;
          text-indent: -3px;
        }
      }
    }
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    .pop {
      position: absolute;
      left: 0;
      bottom: 35px;
      height: 160px;
      width: 160px;
      background: #fff;
      border-radius: 5px;
      .selt-display();
      transform: scaleY(0);
      transition: 0.35s;
      transform-origin: center bottom;
      img {
        width: 145px;
        height: 145px;
        object-fit: cover;
      }
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        bottom: -4px;
        width: 8px;
        height: 8px;
        background-color: #fff;
      }
    }
  }
}
</style>