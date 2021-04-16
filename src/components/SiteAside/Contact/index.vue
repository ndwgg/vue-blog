<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>DuYi-Edu</span>
      </a>
    </li>
    <li>
      <a href="mailto:23423424234@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>23423424234@qq.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>3263023350</span>
      </a>
      <div class="pop">
        <img
          src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
          alt=""
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>dsfggasas</span>
      </a>
      <div class="pop">
        <img
          src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
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