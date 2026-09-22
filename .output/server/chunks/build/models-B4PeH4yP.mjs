import { _ as _sfc_main$1 } from './Alert-IcedS2f6.mjs';
import { _ as _sfc_main$2 } from './Card-jMFP8cqX.mjs';
import { e as useI18n, g as useToast, d as _sfc_main$k, o as _sfc_main$j, k as _sfc_main$B, b as _sfc_main$G, c as _sfc_main$l, O as _sfc_main$g, p as _sfc_main$s } from './server.mjs';
import { _ as _sfc_main$3 } from './Checkbox-BmTSvkxP.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-C_oQJW_c.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { h as hoxiVendors } from './vendors-sPFB0I2R.mjs';
import '../nitro/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'zod';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './isValueEqualOrExist-BVczPdKj.mjs';
import './VisuallyHiddenInput-32bCuzTQ.mjs';
import './RovingFocusItem-DyHBwisL.mjs';
import './utils-DD3u_B8M.mjs';

const hoxiScenes = [
  {
    slug: "coding",
    title: "\u5199\u4EE3\u7801",
    question: "\u5199\u4EE3\u7801\u7528\u54EA\u4E2A AI \u6A21\u578B\u6BD4\u8F83\u597D\uFF1F",
    requirement: "\u8981\u80FD\u8BFB\u61C2\u6574\u4E2A\u4EE3\u7801\u5E93\u7684\u4E0A\u4E0B\u6587\uFF0C\u957F\u65F6\u95F4\u5BF9\u8BDD\u4E0D\u8DD1\u504F\uFF0C\u6539\u5B8C\u7684\u4EE3\u7801\u80FD\u76F4\u63A5\u8DD1\u3002\u4E0A\u4E0B\u6587\u957F\u5EA6\u548C\u6307\u4EE4\u9075\u5FAA\u6BD4\u8F93\u51FA\u901F\u5EA6\u66F4\u8981\u7D27\u3002",
    basis: "\u6309\u7EFC\u5408\u5206\u4E0E\u4EF7\u683C\u6392\u5E8F\uFF0C\u5E76\u53C2\u8003\u5404\u6A21\u578B\u5B98\u65B9\u9875\u9762\u6807\u6CE8\u7684\u4E0A\u4E0B\u6587\u957F\u5EA6\u3002\u672C\u7AD9\u6682\u65E0\u7F16\u7A0B\u4E13\u9879\u8BC4\u5206\uFF0C\u300C\u54EA\u4E2A\u66F4\u4F1A\u5199\u4EE3\u7801\u300D\u5C5E\u4E8E\u7F16\u8F91\u5224\u65AD\uFF0C\u5EFA\u8BAE\u81EA\u5DF1\u8DD1\u4E00\u6BB5\u771F\u5B9E\u4EFB\u52A1\u518D\u5B9A\u3002",
    picks: [
      {
        modelSlug: "claude-opus-5",
        tier: "best",
        reason: "\u7EFC\u5408\u5206\u699C\u9996\uFF0C\u767E\u4E07\u7EA7\u4E0A\u4E0B\u6587\u80FD\u88C5\u4E0B\u6574\u4E2A\u4E2D\u578B\u9879\u76EE\uFF0C\u7F13\u5B58\u547D\u4E2D\u4EF7\u662F\u8F93\u5165\u4EF7\u7684\u5341\u5206\u4E4B\u4E00\u2014\u2014\u53CD\u590D\u95EE\u540C\u4E00\u4E2A\u4EE3\u7801\u5E93\u65F6\u8FD9\u4E00\u9879\u7701\u5F97\u6700\u591A\u3002"
      },
      {
        modelSlug: "glm-5-3",
        tier: "value",
        reason: "\u7EFC\u5408\u5206\u4E0E\u56FD\u4EA7\u7B2C\u4E00\u68AF\u961F\u6301\u5E73\uFF0C\u4EF7\u683C\u5374\u843D\u5728\u4E2D\u6863\uFF0C\u9996\u5B57\u5EF6\u8FDF\u4F4E\u4E8E\u4E24\u79D2\uFF0C\u6539\u4EE3\u7801\u65F6\u7684\u7B49\u5F85\u611F\u660E\u663E\u66F4\u8F7B\u3002"
      },
      {
        modelSlug: "glm-5-3-flash",
        tier: "budget",
        reason: "\u672C\u7AD9\u6027\u4EF7\u6BD4\u6307\u6570\u6700\u9AD8\u7684\u4E00\u4E2A\uFF1A\u7EFC\u5408\u5206\u63A5\u8FD1\u65D7\u8230\uFF0C\u4EF7\u683C\u5374\u5728\u4FBF\u5B9C\u6863\u3002\u9002\u5408\u6539\u6539\u6837\u677F\u4EE3\u7801\u3001\u5199\u6D4B\u8BD5\u3001\u8865\u6CE8\u91CA\u8FD9\u7C7B\u91CF\u5927\u4F46\u4E0D\u70E7\u8111\u7684\u6D3B\u3002"
      }
    ]
  },
  {
    slug: "chat",
    title: "\u65E5\u5E38\u95EE\u7B54",
    question: "\u65E5\u5E38\u804A\u5929\u95EE\u7B54\u7528\u54EA\u4E2A\u6A21\u578B\u6700\u5212\u7B97\uFF1F",
    requirement: "\u4E00\u95EE\u4E00\u7B54\u4E3A\u4E3B\uFF0C\u5355\u6B21\u4E0A\u4E0B\u6587\u4E0D\u957F\u3002\u54CD\u5E94\u8981\u5FEB\u2014\u2014\u9996\u5B57\u5EF6\u8FDF\u548C\u8F93\u51FA\u901F\u5EA6\u76F4\u63A5\u51B3\u5B9A\u4F53\u611F\uFF0C\u80FD\u529B\u8FC7\u5269\u53CD\u800C\u662F\u6D6A\u8D39\u3002",
    basis: "\u6309\u7EFC\u5408\u5206\u3001\u8F93\u51FA\u901F\u5EA6\u4E0E\u9996\u5B57\u5EF6\u8FDF\u6392\u5E8F\uFF0C\u4E09\u9879\u90FD\u6765\u81EA Artificial Analysis \u699C\u5355\uFF0C\u5C5E\u4E8E\u53EF\u6838\u5B9E\u6570\u636E\u3002",
    picks: [
      {
        modelSlug: "gemini-3-7-flash",
        tier: "best",
        reason: "\u672C\u7AD9\u6536\u5F55\u6A21\u578B\u91CC\u8F93\u51FA\u901F\u5EA6\u6700\u5FEB\u7684\u4E00\u4E2A\uFF0C\u5FEB\u5230\u51E0\u4E4E\u6CA1\u6709\u7B49\u5F85\u611F\uFF0C\u7EFC\u5408\u5206\u4E5F\u5728\u4E2D\u4E0A\u6E38\u3002\u6CE8\u610F\u73B0\u4EF7\u662F\u6709\u671F\u9650\u7684\u4FC3\u9500\u4EF7\u3002"
      },
      {
        modelSlug: "glm-5-3-flash",
        tier: "value",
        reason: "\u9996\u5B57\u5EF6\u8FDF\u662F\u672C\u7AD9\u6700\u4F4E\u7684\uFF0C\u4E00\u6309\u56DE\u8F66\u5C31\u5F00\u59CB\u51FA\u5B57\uFF1B\u4EF7\u683C\u5728\u4FBF\u5B9C\u6863\uFF0C\u65E5\u5E38\u9AD8\u9891\u4F7F\u7528\u4E5F\u4E0D\u5FC3\u75BC\u3002"
      },
      {
        modelSlug: "glm-4-7-flash",
        tier: "budget",
        reason: "\u5B98\u65B9\u6807\u6CE8\u514D\u8D39\uFF0C\u65E5\u5E38\u95EE\u7B54\u5B8C\u5168\u591F\u7528\u3002\u9002\u5408\u4E2A\u4EBA\u81EA\u7528\u548C\u505A\u539F\u578B\uFF0C\u4F46\u514D\u8D39\u7B56\u7565\u968F\u65F6\u53EF\u80FD\u53D8\uFF0C\u522B\u7528\u5B83\u6491\u751F\u4EA7\u3002"
      }
    ]
  },
  {
    slug: "long-doc",
    title: "\u957F\u6587\u6863\u5904\u7406",
    question: "\u5904\u7406\u957F\u6587\u6863\u3001\u5927\u6BB5\u8D44\u6599\u8BE5\u7528\u4EC0\u4E48\u6A21\u578B\uFF1F",
    requirement: "\u4E00\u6B21\u585E\u8FDB\u51E0\u5341\u4E07\u5B57\u8FD8\u80FD\u8BB0\u4F4F\u7EC6\u8282\u3002\u4E0A\u4E0B\u6587\u957F\u5EA6\u662F\u786C\u95E8\u69DB\uFF0C\u5176\u6B21\u662F\u7F13\u5B58\u4EF7\u2014\u2014\u540C\u4E00\u4EFD\u6587\u6863\u53CD\u590D\u63D0\u95EE\u65F6\uFF0C\u7F13\u5B58\u547D\u4E2D\u4EF7\u51B3\u5B9A\u603B\u82B1\u8D39\u3002",
    basis: "\u6309\u5B98\u65B9\u516C\u5E03\u7684\u4E0A\u4E0B\u6587\u957F\u5EA6\u4E0E\u7F13\u5B58\u547D\u4E2D\u4EF7\u7B5B\u9009\uFF0C\u4E24\u9879\u5747\u6765\u81EA\u5382\u5546\u5B9A\u4EF7\u9875\u4E0E\u6A21\u578B\u9875\uFF0C\u5C5E\u4E8E\u53EF\u6838\u5B9E\u6570\u636E\u3002",
    picks: [
      {
        modelSlug: "gpt-5-6-sol",
        tier: "best",
        reason: "\u4E0A\u4E0B\u6587\u662F\u672C\u7AD9\u6700\u957F\u7684\u4E00\u6863\uFF0C\u7EFC\u5408\u5206\u4E5F\u5728\u7B2C\u4E00\u68AF\u961F\uFF0C\u957F\u8D44\u6599\u91CC\u7FFB\u7EC6\u8282\u4E0D\u5BB9\u6613\u6F0F\u3002"
      },
      {
        modelSlug: "gemini-3-7-flash",
        tier: "value",
        reason: "\u767E\u4E07\u7EA7\u4E0A\u4E0B\u6587\u52A0\u6700\u5FEB\u7684\u8F93\u51FA\u901F\u5EA6\uFF0C\u957F\u6587\u6458\u8981\u8FD9\u7C7B\u300C\u8F93\u5165\u5DE8\u5927\u3001\u8F93\u51FA\u4E5F\u4E0D\u77ED\u300D\u7684\u6D3B\u6700\u5403\u8FD9\u4E2A\u7EC4\u5408\u3002"
      },
      {
        modelSlug: "qwen3-8-flash",
        tier: "budget",
        reason: "\u540C\u6837\u662F\u767E\u4E07\u7EA7\u4E0A\u4E0B\u6587\uFF0C\u4EF7\u683C\u5374\u5728\u6700\u4FBF\u5B9C\u7684\u4E00\u6863\uFF0C\u7F13\u5B58\u547D\u4E2D\u4EF7\u4E5F\u4F4E\u3002\u53CD\u590D\u95EE\u540C\u4E00\u6279\u8D44\u6599\u65F6\u4F18\u52BF\u6700\u660E\u663E\u3002"
      }
    ]
  },
  {
    slug: "translation",
    title: "\u7FFB\u8BD1",
    question: "\u6279\u91CF\u7FFB\u8BD1\u7528\u54EA\u4E2A\u6A21\u578B\u6210\u672C\u6700\u4F4E\uFF1F",
    requirement: "\u91CF\u5927\u3001\u5355\u6761\u4E0D\u957F\u3001\u8D28\u91CF\u8981\u7A33\u5B9A\u3002\u8FD9\u662F\u5178\u578B\u7684\u6210\u672C\u654F\u611F\u573A\u666F\uFF0C\u5355\u4EF7\u7684\u4E00\u70B9\u5DEE\u5F02\u4F1A\u88AB\u8C03\u7528\u91CF\u653E\u5927\u3002",
    basis: "\u6309\u7EFC\u5408\u5206\u4E0E\u6DF7\u5408\u4EF7\u6392\u5E8F\u3002\u672C\u7AD9\u6CA1\u6709\u7FFB\u8BD1\u6216\u4E2D\u6587\u4E13\u9879\u8BC4\u5206\uFF0C\u300C\u54EA\u4E2A\u7FFB\u5F97\u66F4\u597D\u300D\u5C5E\u4E8E\u7F16\u8F91\u5224\u65AD\u2014\u2014\u5EFA\u8BAE\u5148\u7528\u540C\u4E00\u6279\u53E5\u5B50\u5B9E\u6D4B\u518D\u51B3\u5B9A\u3002",
    picks: [
      {
        modelSlug: "glm-5-3",
        tier: "best",
        reason: "\u7EFC\u5408\u5206\u4E0E\u56FD\u4EA7\u7B2C\u4E00\u68AF\u961F\u6301\u5E73\uFF0C\u4EF7\u683C\u53EA\u6709\u6D77\u5916\u65D7\u8230\u7684\u96F6\u5934\uFF0C\u91CF\u5927\u65F6\u8FD9\u4E2A\u5DEE\u8DDD\u4F1A\u88AB\u653E\u5927\u6210\u4E3B\u8981\u6210\u672C\u9879\u3002"
      },
      {
        modelSlug: "glm-5-3-flash",
        tier: "value",
        reason: "\u7EFC\u5408\u5206\u53EA\u6BD4\u4E0A\u9762\u4F4E\u4E00\u70B9\uFF0C\u4EF7\u683C\u5374\u4F4E\u4E00\u4E2A\u6570\u91CF\u7EA7\uFF0C\u662F\u672C\u7AD9\u6027\u4EF7\u6BD4\u6307\u6570\u6700\u9AD8\u7684\u6A21\u578B\u3002"
      },
      {
        modelSlug: "doubao-seed-2-0-mini",
        tier: "budget",
        reason: "\u77ED\u8F93\u5165\u6863\u4F4D\u4E0B\u662F\u672C\u7AD9\u6700\u4FBF\u5B9C\u7684\u4ED8\u8D39\u6A21\u578B\u4E4B\u4E00\u3002\u7FFB\u8BD1\u5355\u6761\u901A\u5E38\u5F88\u77ED\uFF0C\u6B63\u597D\u843D\u5728\u6700\u4F4E\u6863\u2014\u2014\u4F46\u6CE8\u610F\u8F93\u5165\u8D85\u8FC7 32K \u540E\u4EF7\u683C\u4F1A\u8DF3\u6863\u3002"
      }
    ]
  },
  {
    slug: "batch",
    title: "\u6279\u91CF\u6570\u636E\u5904\u7406",
    question: "\u5927\u6279\u91CF\u8DD1\u6570\u636E\uFF08\u5206\u7C7B\u3001\u62BD\u53D6\u3001\u6253\u6807\uFF09\u7528\u4EC0\u4E48\u6A21\u578B\u6700\u7701\uFF1F",
    requirement: "\u51E0\u5341\u4E07\u6761\u8D77\u6B65\uFF0C\u4EFB\u52A1\u7B80\u5355\u4F46\u91CF\u6781\u5927\u3002\u5355\u4EF7\u548C\u541E\u5410\u662F\u5168\u90E8\uFF0C\u80FD\u529B\u53EA\u8981\u591F\u7528\u5C31\u884C\u3002\u8981\u7559\u610F\u9636\u68AF\u4EF7\u548C\u6279\u91CF\u6298\u6263\u3002",
    basis: "\u6309\u6DF7\u5408\u4EF7\u4E0E\u8F93\u51FA\u901F\u5EA6\u6392\u5E8F\uFF0C\u5E76\u6838\u5BF9\u4E86\u5404\u5382\u5546\u5B9A\u4EF7\u9875\u4E0A\u7684\u6279\u91CF\u6298\u6263\u4E0E\u9636\u68AF\u4EF7\u6761\u6B3E\u3002",
    picks: [
      {
        modelSlug: "gemini-3-7-flash",
        tier: "best",
        reason: "\u8F93\u51FA\u901F\u5EA6\u8FDC\u9AD8\u4E8E\u540C\u699C\u5176\u4ED6\u6A21\u578B\uFF0C\u8DD1\u5B8C\u4E00\u6279\u7684\u5899\u4E0A\u65F6\u95F4\u6700\u77ED\u3002\u9002\u5408\u6709\u65F6\u9650\u7684\u6279\u5904\u7406\u3002"
      },
      {
        modelSlug: "qwen3-8-flash",
        tier: "value",
        reason: "\u4EF7\u683C\u5DF2\u5728\u4FBF\u5B9C\u6863\uFF0C\u5B98\u65B9\u8FD8\u63D0\u4F9B\u6279\u91CF\u8C03\u7528\u4E94\u6298\uFF0C\u5B9E\u9645\u6210\u672C\u53EF\u4EE5\u518D\u780D\u4E00\u534A\u3002"
      },
      {
        modelSlug: "glm-4-7-flash",
        tier: "budget",
        reason: "\u5B98\u65B9\u6807\u6CE8\u514D\u8D39\uFF0C\u8DD1\u91CF\u9A8C\u8BC1\u9636\u6BB5\u7684\u9996\u9009\u3002\u6B63\u5F0F\u4E0A\u91CF\u524D\u8BF7\u786E\u8BA4\u914D\u989D\u9650\u5236\uFF0C\u514D\u8D39\u7B56\u7565\u4E5F\u53EF\u80FD\u8C03\u6574\u3002"
      }
    ]
  },
  {
    slug: "chinese-writing",
    title: "\u4E2D\u6587\u5199\u4F5C",
    question: "\u5199\u4E2D\u6587\u6587\u6848\u3001\u62A5\u544A\u7528\u54EA\u4E2A\u6A21\u578B\uFF1F",
    requirement: "\u4E2D\u6587\u8868\u8FBE\u8981\u81EA\u7136\uFF0C\u957F\u6587\u7ED3\u6784\u8981\u7A33\uFF0C\u80FD\u6309\u8981\u6C42\u8C03\u6574\u8BED\u6C14\u548C\u4F53\u88C1\u3002",
    basis: "\u672C\u7AD9\u6CA1\u6709\u4E2D\u6587\u4E13\u9879\u8BC4\u5206\uFF0C\u8FD9\u4E00\u7EC4\u63A8\u8350\u5C5E\u4E8E\u7F16\u8F91\u5224\u65AD\uFF0C\u4EC5\u53C2\u8003\u4E86\u7EFC\u5408\u5206\u4E0E\u5404\u6A21\u578B\u5B98\u65B9\u9875\u9762\u58F0\u660E\u7684\u4E2D\u6587\u80FD\u529B\u5B9A\u4F4D\u3002\u8BF7\u52A1\u5FC5\u81EA\u5DF1\u8BD5\u5199\u4E00\u6BB5\u518D\u5B9A\u3002",
    picks: [
      {
        modelSlug: "kimi-k3",
        tier: "best",
        reason: "\u56FD\u4EA7\u7B2C\u4E00\u68AF\u961F\u7684\u7EFC\u5408\u5206\uFF0C\u4E0A\u4E0B\u6587\u8D85\u8FC7\u767E\u4E07\uFF0C\u5199\u957F\u7A3F\u65F6\u524D\u540E\u6587\u7167\u5E94\u4E0D\u5BB9\u6613\u65AD\u3002\u6CE8\u610F\u5B83\u7684\u8F93\u51FA\u4EF7\u662F\u672C\u7AD9\u56FD\u4EA7\u6A21\u578B\u91CC\u6700\u9AD8\u7684\uFF0C\u957F\u7A3F\u8981\u7B97\u597D\u8D26\u3002"
      },
      {
        modelSlug: "glm-5-3",
        tier: "value",
        reason: "\u7EFC\u5408\u5206\u4E0E\u4E0A\u9762\u6301\u5E73\uFF0C\u4EF7\u683C\u5374\u4F4E\u4E0D\u5C11\uFF0C\u957F\u7A3F\u6210\u672C\u538B\u529B\u5C0F\u5F97\u591A\u3002"
      },
      {
        modelSlug: "qwen3-8-flash",
        tier: "budget",
        reason: "\u4FBF\u5B9C\u6863\u91CC\u5C11\u89C1\u7684\u767E\u4E07\u4E0A\u4E0B\u6587\uFF0C\u5199\u957F\u7A3F\u4E0D\u7528\u5207\u6BB5\u3002\u9002\u5408\u521D\u7A3F\u548C\u5927\u6279\u91CF\u6587\u6848\u3002"
      }
    ]
  },
  {
    slug: "agent",
    title: "Agent \u5DE5\u5177\u8C03\u7528",
    question: "\u505A Agent\u3001\u8BA9\u6A21\u578B\u8C03\u5DE5\u5177\uFF0C\u8BE5\u9009\u54EA\u4E2A\uFF1F",
    requirement: "\u8981\u80FD\u7A33\u5B9A\u6309 schema \u8F93\u51FA\u3001\u591A\u8F6E\u4E0D\u5FD8\u8BB0\u76EE\u6807\u3001\u5DE5\u5177\u8C03\u7528\u5931\u8D25\u540E\u4F1A\u81EA\u5DF1\u7EA0\u6B63\u3002\u94FE\u8DEF\u4E00\u957F\uFF0C\u7A33\u5B9A\u6027\u6BD4\u5355\u70B9\u80FD\u529B\u66F4\u91CD\u8981\u3002",
    basis: "\u672C\u7AD9\u6CA1\u6709 Agent \u4E13\u9879\u8BC4\u5206\uFF0C\u8FD9\u4E00\u7EC4\u5C5E\u4E8E\u7F16\u8F91\u5224\u65AD\uFF0C\u4E3B\u8981\u53C2\u8003\u7EFC\u5408\u5206\u4E0E\u4E0A\u4E0B\u6587\u957F\u5EA6\u3002Agent \u573A\u666F\u5BF9\u7A33\u5B9A\u6027\u7684\u8981\u6C42\u5F88\u96BE\u7531\u7EFC\u5408\u5206\u53CD\u6620\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u81EA\u5DF1\u538B\u6D4B\u3002",
    picks: [
      {
        modelSlug: "claude-opus-5",
        tier: "best",
        reason: "\u7EFC\u5408\u5206\u699C\u9996\uFF0C\u957F\u94FE\u8DEF\u591A\u8F6E\u5BF9\u8BDD\u91CC\u76EE\u6807\u6F02\u79FB\u66F4\u5C11\uFF1B\u7F13\u5B58\u547D\u4E2D\u4EF7\u4F4E\uFF0CAgent \u53CD\u590D\u5E26\u4E0A\u540C\u4E00\u6BB5\u7CFB\u7EDF\u63D0\u793A\u65F6\u7701\u5F97\u660E\u663E\u3002"
      },
      {
        modelSlug: "gpt-5-6-terra",
        tier: "value",
        reason: "\u7EFC\u5408\u5206\u4E2D\u4E0A\u6E38\uFF0C\u8F93\u51FA\u901F\u5EA6\u9AD8\u4E8E\u540C\u95E8\u65D7\u8230\uFF0C\u4E14\u63A8\u7406\u6863\u4F4D\u53EF\u8C03\u2014\u2014Agent \u7684\u591A\u6570\u6B65\u9AA4\u5E76\u4E0D\u9700\u8981\u6700\u9AD8\u6863\uFF0C\u8C03\u4F4E\u80FD\u76F4\u63A5\u7701\u94B1\u3002"
      },
      {
        modelSlug: "glm-5-3",
        tier: "budget",
        reason: "\u7EFC\u5408\u5206\u4E0E\u7B2C\u4E00\u68AF\u961F\u6301\u5E73\u800C\u4EF7\u683C\u5728\u4E2D\u6863\uFF0C\u9996\u5B57\u5EF6\u8FDF\u4F4E\u4E8E\u4E24\u79D2\uFF0C\u591A\u6B65\u94FE\u8DEF\u91CC\u6BCF\u4E00\u6B65\u7684\u7B49\u5F85\u90FD\u4F1A\u7D2F\u79EF\uFF0C\u8FD9\u4E00\u9879\u5F88\u5173\u952E\u3002"
      }
    ]
  },
  {
    slug: "vision",
    title: "\u56FE\u7247\u7406\u89E3",
    question: "\u770B\u56FE\u3001\u8BC6\u56FE\u3001\u8BFB\u622A\u56FE\u7528\u54EA\u4E2A\u6A21\u578B\uFF1F",
    requirement: "\u8981\u652F\u6301\u56FE\u7247\u8F93\u5165\uFF0C\u80FD\u8BFB\u61C2\u56FE\u8868\u548C\u754C\u9762\u622A\u56FE\u3002\u591A\u6570\u573A\u666F\u8FD8\u9700\u8981\u540C\u65F6\u5904\u7406\u5927\u91CF\u56FE\u7247\uFF0C\u56E0\u6B64\u5355\u4EF7\u540C\u6837\u654F\u611F\u3002",
    basis: "\u6309\u5404\u5382\u5546\u5B98\u65B9\u9875\u9762\u58F0\u660E\u7684\u8F93\u5165\u6A21\u6001\u7B5B\u9009\uFF0C\u518D\u6309\u7EFC\u5408\u5206\u4E0E\u4EF7\u683C\u6392\u5E8F\u3002\u6A21\u6001\u652F\u6301\u5C5E\u4E8E\u53EF\u6838\u5B9E\u6570\u636E\uFF0C\u8BC6\u56FE\u51C6\u786E\u5EA6\u672C\u7AD9\u672A\u6D4B\u3002",
    picks: [
      {
        modelSlug: "gemini-3-7-flash",
        tier: "best",
        reason: "\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u5168\u652F\u6301\uFF0C\u662F\u672C\u7AD9\u6A21\u6001\u6700\u5168\u7684\u4E00\u6863\uFF0C\u8F93\u51FA\u901F\u5EA6\u4E5F\u6700\u5FEB\uFF0C\u9002\u5408\u56FE\u6587\u6DF7\u5408\u7684\u6279\u5904\u7406\u3002"
      },
      {
        modelSlug: "qwen3-8-flash",
        tier: "value",
        reason: "\u652F\u6301\u56FE\u7247\u4E0E\u89C6\u9891\u8F93\u5165\uFF0C\u4EF7\u683C\u5374\u5728\u6700\u4FBF\u5B9C\u7684\u4E00\u6863\uFF0C\u767E\u4E07\u4E0A\u4E0B\u6587\u8FD8\u80FD\u4E00\u6B21\u585E\u8FDB\u5927\u91CF\u56FE\u6587\u3002"
      },
      {
        modelSlug: "doubao-seed-2-0-mini",
        tier: "budget",
        reason: "\u6587\u672C\u3001\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\u56DB\u79CD\u6A21\u6001\u90FD\u652F\u6301\uFF0C\u77ED\u8F93\u5165\u6863\u4F4D\u4E0B\u4EF7\u683C\u6781\u4F4E\u3002\u6CE8\u610F\u97F3\u9891\u8F93\u5165\u5355\u72EC\u8BA1\u4EF7\uFF0C\u6BD4\u6587\u672C\u8D35\u4E0D\u5C11\u3002"
      }
    ]
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "models",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const toast = useToast();
    const saving = ref(false);
    const syncing = ref(false);
    const modalSaving = ref(false);
    const errorMsg = ref("");
    const savedAt = ref("");
    const homeScene = ref("chat");
    const searchQuery = ref("");
    const selectedVendorFilter = ref("all");
    const modelsList = ref([]);
    const isEditModalOpen = ref(false);
    const isEditing = ref(false);
    const isSyncModalOpen = ref(false);
    const isHomeSettingsModalOpen = ref(false);
    const homeSettingsSaving = ref(false);
    const activeHomeSettingsTab = ref("combo");
    const defaultHomeSettings = () => ({
      dailyCombo: [
        { tag: "\u65E5\u5E38 70%", model: "Gemini 2.5 Flash", note: "\u6781\u901F\u65E0\u611F", color: "blue" },
        { tag: "\u653B\u575A 20%", model: "Claude Code / 3.7", note: "\u6DF1\u5EA6\u91CD\u6784", color: "purple" },
        { tag: "\u8865\u5145 10%", model: "Grok 3 / Codex", note: "\u7075\u611F\u8F85\u52A9", color: "emerald" }
      ],
      impressionsSubtitle: "\u57FA\u4E8E\u7AD9\u957F\u65E5\u5E38\u5168\u6808\u5F00\u53D1\u4E0E\u91CD\u6784\u7684\u771F\u5B9E\u4F53\u611F\u6253\u5206\uFF0C\u62D2\u7EDD\u4E91\u8BC4\u6D4B\u4E0E\u865A\u5047\u53C2\u6570\u3002",
      impressionsMode: "auto",
      impressionsModelSlugs: []
    });
    const homeSettingsForm = ref(defaultHomeSettings());
    const colorOptions = [
      { label: "\u{1F535} \u79D1\u6280\u84DD (Blue)", value: "blue" },
      { label: "\u{1F7E3} \u6781\u5BA2\u7D2B (Purple)", value: "purple" },
      { label: "\u{1F7E2} \u7FE1\u7FE0\u7EFF (Emerald)", value: "emerald" },
      { label: "\u{1F7E0} \u7425\u73C0\u91D1 (Amber)", value: "amber" },
      { label: "\u{1F534} \u73AB\u7470\u7EA2 (Rose)", value: "rose" }
    ];
    const getComboPreviewBadge = (color) => {
      switch (color) {
        case "purple":
          return "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300";
        case "emerald":
        case "green":
          return "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300";
        case "amber":
        case "yellow":
          return "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300";
        case "rose":
        case "red":
          return "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300";
        case "blue":
        default:
          return "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300";
      }
    };
    const openHomeSettingsModal = () => {
      isHomeSettingsModalOpen.value = true;
    };
    const addComboItem = () => {
      homeSettingsForm.value.dailyCombo.push({
        tag: "\u65B0\u9636\u6BB5",
        model: "",
        note: "",
        color: "blue"
      });
    };
    const removeComboItem = (index) => {
      homeSettingsForm.value.dailyCombo.splice(index, 1);
    };
    const moveComboItem = (index, offset) => {
      const target = index + offset;
      if (target < 0 || target >= homeSettingsForm.value.dailyCombo.length) return;
      const item = homeSettingsForm.value.dailyCombo.splice(index, 1)[0];
      homeSettingsForm.value.dailyCombo.splice(target, 0, item);
    };
    const isManualModelSelected = (slug) => {
      return homeSettingsForm.value.impressionsModelSlugs.includes(slug);
    };
    const getManualModelOrder = (slug) => {
      const idx = homeSettingsForm.value.impressionsModelSlugs.indexOf(slug);
      return idx >= 0 ? idx + 1 : "";
    };
    const toggleManualModel = (slug) => {
      const idx = homeSettingsForm.value.impressionsModelSlugs.indexOf(slug);
      if (idx >= 0) {
        homeSettingsForm.value.impressionsModelSlugs.splice(idx, 1);
      } else {
        homeSettingsForm.value.impressionsModelSlugs.push(slug);
      }
    };
    const resetHomeSettingsToDefault = () => {
      homeSettingsForm.value = defaultHomeSettings();
    };
    const saveHomeSettings = async () => {
      var _a;
      homeSettingsSaving.value = true;
      try {
        const res = await $fetch("/api/admin/hoxi/models", {
          method: "POST",
          body: {
            action: "save_home_settings",
            homeSettings: homeSettingsForm.value
          }
        });
        if (res.ok) {
          toast.add({
            title: "\u9996\u9875\u642D\u914D\u4E0E\u5C55\u793A\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F",
            description: "\u914D\u7F6E\u5DF2\u66F4\u65B0\u5E76\u53D1\u5E03\u5230\u9996\u9875\uFF0C\u5168\u7AD9\u79D2\u7EA7\u751F\u6548",
            color: "success"
          });
          isHomeSettingsModalOpen.value = false;
        }
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u7F51\u7EDC\u8BF7\u6C42\u5F02\u5E38",
          color: "error"
        });
      } finally {
        homeSettingsSaving.value = false;
      }
    };
    const activeModalTab = ref("basic");
    const modalTabs = [
      { key: "basic", label: "1. \u57FA\u7840\u4E0E\u5382\u5546", icon: "ph:identification-card" },
      { key: "pricing", label: "2. \u5B9A\u4EF7\u4E0E\u8BA1\u8D39", icon: "ph:currency-dollar" },
      { key: "scores", label: "3. \u89C4\u683C\u4E0E\u80FD\u529B\u8BC4\u5206", icon: "ph:chart-bar" },
      { key: "content", label: "4. \u7AD9\u957F\u70B9\u8BC4\u4E0E\u907F\u5751", icon: "ph:chat-teardrop-text" }
    ];
    const emptyForm = () => ({
      slug: "",
      name: "",
      vendor: "openai",
      currency: "USD",
      price: {
        currency: "USD",
        input: 2.5,
        output: 10,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      contextWindow: 128e3,
      maxOutputTokens: 8192,
      scores: {
        overall: void 0,
        coding: void 0,
        reasoning: void 0,
        chinese: void 0,
        agentic: void 0
      },
      badges: [],
      badgesInput: "",
      scenes: [],
      scenesInput: "",
      reasoning: false,
      openWeights: false,
      isFree: false,
      hidden: false,
      summary: "",
      highlightsInput: "",
      caveatsInput: "",
      sources: [],
      apiName: "",
      releasedAt: ""
    });
    const formModel = ref(emptyForm());
    const sceneOptions = hoxiScenes.map((scene) => ({ label: scene.title, value: scene.slug }));
    const vendorFilterOptions = [
      { label: "\u5168\u90E8\u5382\u5546", value: "all" },
      ...hoxiVendors.map((v) => ({ label: v.nameZh || v.name, value: v.slug }))
    ];
    const vendorSelectOptions = hoxiVendors.map((v) => ({ label: `${v.nameZh || v.name} (${v.slug})`, value: v.slug }));
    const getVendorLabel = (vendorSlug) => {
      const v = hoxiVendors.find((item) => item.slug === vendorSlug);
      return v ? v.nameZh || v.name : vendorSlug;
    };
    const loadData = async () => {
      var _a;
      try {
        const res = await $fetch("/api/admin/hoxi/models");
        if (res && res.models && Array.isArray(res.models)) {
          modelsList.value = res.models.map((m) => ({
            ...m,
            badgesStr: (m.badges || []).join(", "),
            scenesStr: (m.scenes || []).join(", ")
          }));
          if (res.homeSettings) {
            homeSettingsForm.value = {
              dailyCombo: Array.isArray(res.homeSettings.dailyCombo) && res.homeSettings.dailyCombo.length > 0 ? res.homeSettings.dailyCombo : defaultHomeSettings().dailyCombo,
              impressionsSubtitle: res.homeSettings.impressionsSubtitle || defaultHomeSettings().impressionsSubtitle,
              impressionsMode: res.homeSettings.impressionsMode || "auto",
              impressionsModelSlugs: Array.isArray(res.homeSettings.impressionsModelSlugs) ? res.homeSettings.impressionsModelSlugs : []
            };
          }
        } else if (Array.isArray(res)) {
          modelsList.value = res.map((m) => ({
            ...m,
            badgesStr: (m.badges || []).join(", "),
            scenesStr: (m.scenes || []).join(", ")
          }));
        }
        errorMsg.value = "";
      } catch (err) {
        errorMsg.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u52A0\u8F7D\u6A21\u578B\u6570\u636E\u5931\u8D25";
      }
    };
    const filteredModels = computed(() => {
      return modelsList.value.filter((m) => {
        const matchSearch = !searchQuery.value.trim() || m.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || m.slug.toLowerCase().includes(searchQuery.value.toLowerCase()) || m.vendor.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchVendor = selectedVendorFilter.value === "all" || m.vendor === selectedVendorFilter.value;
        return matchSearch && matchVendor;
      });
    });
    const openAddModal = () => {
      isEditing.value = false;
      activeModalTab.value = "basic";
      formModel.value = emptyForm();
      isEditModalOpen.value = true;
    };
    const openEditModal = (row) => {
      var _a;
      isEditing.value = true;
      activeModalTab.value = "basic";
      formModel.value = {
        ...row,
        currency: ((_a = row.price) == null ? void 0 : _a.currency) || "USD",
        badgesInput: (row.badges || []).join(", "),
        scenesInput: (row.scenes || []).join(", "),
        highlightsInput: (row.highlights || []).join("\n"),
        caveatsInput: (row.caveats || []).join("\n")
      };
      isEditModalOpen.value = true;
    };
    const saveSingleModel = async () => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (!((_a = formModel.value.name) == null ? void 0 : _a.trim()) || !((_b = formModel.value.slug) == null ? void 0 : _b.trim())) {
        toast.add({ title: "\u8BF7\u586B\u5199\u6A21\u578B\u540D\u79F0\u4E0E\u6807\u8BC6 (Slug)", color: "error" });
        activeModalTab.value = "basic";
        return;
      }
      modalSaving.value = true;
      try {
        const payload = {
          action: "upsert",
          model: {
            slug: formModel.value.slug.trim(),
            name: formModel.value.name.trim(),
            vendor: formModel.value.vendor,
            currency: formModel.value.currency,
            price: {
              currency: formModel.value.currency,
              input: Number(formModel.value.price.input || 0),
              output: Number(formModel.value.price.output || 0),
              cacheRead: formModel.value.price.cacheRead ? Number(formModel.value.price.cacheRead) : void 0,
              cacheWrite: formModel.value.price.cacheWrite ? Number(formModel.value.price.cacheWrite) : void 0
            },
            contextWindow: Number(formModel.value.contextWindow || 128e3),
            maxOutputTokens: formModel.value.maxOutputTokens ? Number(formModel.value.maxOutputTokens) : void 0,
            scores: {
              overall: ((_c = formModel.value.scores) == null ? void 0 : _c.overall) ? Number(formModel.value.scores.overall) : void 0,
              coding: ((_d = formModel.value.scores) == null ? void 0 : _d.coding) ? Number(formModel.value.scores.coding) : void 0,
              reasoning: ((_e = formModel.value.scores) == null ? void 0 : _e.reasoning) ? Number(formModel.value.scores.reasoning) : void 0,
              chinese: ((_f = formModel.value.scores) == null ? void 0 : _f.chinese) ? Number(formModel.value.scores.chinese) : void 0,
              agentic: ((_g = formModel.value.scores) == null ? void 0 : _g.agentic) ? Number(formModel.value.scores.agentic) : void 0
            },
            badges: String(formModel.value.badgesInput || "").split(",").map((s) => s.trim()).filter(Boolean),
            scenes: String(formModel.value.scenesInput || "").split(",").map((s) => s.trim()).filter(Boolean),
            reasoning: Boolean(formModel.value.reasoning),
            openWeights: Boolean(formModel.value.openWeights),
            isFree: Boolean(formModel.value.isFree),
            hidden: Boolean(formModel.value.hidden),
            releasedAt: formModel.value.releasedAt || void 0,
            summary: formModel.value.summary || "",
            highlights: String(formModel.value.highlightsInput || "").split("\n").map((s) => s.trim()).filter(Boolean),
            caveats: String(formModel.value.caveatsInput || "").split("\n").map((s) => s.trim()).filter(Boolean),
            sources: formModel.value.sources || [],
            apiName: formModel.value.apiName || void 0
          }
        };
        await $fetch("/api/admin/hoxi/models", {
          method: "POST",
          body: payload
        });
        toast.add({ title: "\u6A21\u578B\u6570\u636E\u5DF2\u6210\u529F\u4FDD\u5B58\u81F3\u6570\u636E\u5E93", color: "success" });
        isEditModalOpen.value = false;
        await loadData();
      } catch (err) {
        toast.add({ title: "\u4FDD\u5B58\u5931\u8D25", description: (err == null ? void 0 : err.message) || String(err), color: "error" });
      } finally {
        modalSaving.value = false;
      }
    };
    const saveBatch = async () => {
      saving.value = true;
      try {
        const payloadModels = modelsList.value.map((row) => ({
          slug: row.slug,
          name: row.name,
          price: {
            input: Number(row.price.input || 0),
            output: Number(row.price.output || 0)
          },
          badges: String(row.badgesStr || "").split(",").map((s) => s.trim()).filter(Boolean),
          hidden: Boolean(row.hidden)
        }));
        const res = await $fetch("/api/admin/hoxi/models", {
          method: "POST",
          body: {
            models: payloadModels,
            homeScene: homeScene.value
          }
        });
        savedAt.value = res.savedAt || (/* @__PURE__ */ new Date()).toISOString();
        toast.add({ title: "\u6279\u91CF\u4FEE\u6539\u5DF2\u4FDD\u5B58\u81F3\u6570\u636E\u5E93\uFF0C\u524D\u53F0\u5373\u523B\u751F\u6548", color: "success" });
      } catch (error) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: error instanceof Error ? error.message : String(error),
          color: "error"
        });
      } finally {
        saving.value = false;
      }
    };
    const confirmDelete = async (row) => {
      if (!confirm(`\u786E\u5B9A\u8981\u4ECE\u6570\u636E\u5E93\u4E2D\u5F7B\u5E95\u5220\u9664\u6A21\u578B "${row.name}" (${row.slug}) \u5417\uFF1F`)) {
        return;
      }
      try {
        await $fetch("/api/admin/hoxi/models", {
          method: "POST",
          body: {
            action: "delete",
            slug: row.slug
          }
        });
        toast.add({ title: `\u5DF2\u5220\u9664\u6A21\u578B ${row.name}`, color: "success" });
        await loadData();
      } catch (err) {
        toast.add({ title: "\u5220\u9664\u5931\u8D25", description: err == null ? void 0 : err.message, color: "error" });
      }
    };
    const confirmSyncSeed = () => {
      isSyncModalOpen.value = true;
    };
    const executeSyncSeed = async () => {
      syncing.value = true;
      try {
        await $fetch("/api/admin/hoxi/models", {
          method: "POST",
          body: {
            action: "sync_seed"
          }
        });
        toast.add({ title: "\u5DF2\u6210\u529F\u4ECE\u57FA\u51C6\u79CD\u5B50\u6570\u636E\u540C\u6B65\u81F3\u6570\u636E\u5E93", color: "success" });
        isSyncModalOpen.value = false;
        await loadData();
      } catch (err) {
        toast.add({ title: "\u540C\u6B65\u5931\u8D25", description: err == null ? void 0 : err.message, color: "error" });
      } finally {
        syncing.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAlert = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UCheckbox = _sfc_main$3;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$l;
      const _component_UTextarea = _sfc_main$g;
      const _component_UModal = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (errorMsg.value) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: "\u63A5\u53E3\u8BF7\u6C42\u5F02\u5E38",
          description: errorMsg.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h2 class="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:cpu",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>AI \u6A21\u578B\u6570\u636E\u8868\u7BA1\u7406 (Database-First)</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u6570\u636E\u5DF2\u5168\u9762\u6301\u4E45\u5316\u5B58\u50A8\u81F3\u6570\u636E\u5E93 \`hoxi_models\` \u8868\u3002\u652F\u6301\u6DFB\u52A0\u65B0\u6A21\u578B\u3001\u8C03\u6574\u5404\u7EF4\u5EA6\u80FD\u529B\u8BC4\u5206\u4E0E\u4EF7\u683C\u3001\u4FEE\u6539\u907F\u5751\u63D0\u793A\u53CA\u4E00\u952E\u540C\u6B65\u79CD\u5B50\u5E93\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "info",
              variant: "soft",
              icon: "ph:sliders-horizontal",
              size: "sm",
              onClick: openHomeSettingsModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u9996\u9875\u642D\u914D\u4E0E\u5C55\u793A\u8BBE\u7F6E `);
                } else {
                  return [
                    createTextVNode(" \u9996\u9875\u642D\u914D\u4E0E\u5C55\u793A\u8BBE\u7F6E ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:arrow-counter-clockwise",
              size: "sm",
              loading: syncing.value,
              onClick: confirmSyncSeed
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u540C\u6B65\u79CD\u5B50\u57FA\u51C6 `);
                } else {
                  return [
                    createTextVNode(" \u540C\u6B65\u79CD\u5B50\u57FA\u51C6 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:plus",
              size: "sm",
              onClick: openAddModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u65B0\u589E\u6A21\u578B `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u6A21\u578B ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: saving.value,
              icon: "ph:floppy-disk",
              size: "sm",
              onClick: saveBatch
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u8868\u683C\u4FEE\u6539 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u8868\u683C\u4FEE\u6539 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:cpu",
                      class: "w-5 h-5 text-blue-500"
                    }),
                    createVNode("span", null, "AI \u6A21\u578B\u6570\u636E\u8868\u7BA1\u7406 (Database-First)")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " \u6570\u636E\u5DF2\u5168\u9762\u6301\u4E45\u5316\u5B58\u50A8\u81F3\u6570\u636E\u5E93 `hoxi_models` \u8868\u3002\u652F\u6301\u6DFB\u52A0\u65B0\u6A21\u578B\u3001\u8C03\u6574\u5404\u7EF4\u5EA6\u80FD\u529B\u8BC4\u5206\u4E0E\u4EF7\u683C\u3001\u4FEE\u6539\u907F\u5751\u63D0\u793A\u53CA\u4E00\u952E\u540C\u6B65\u79CD\u5B50\u5E93\u3002 ")
                ]),
                createVNode("div", { class: "flex flex-wrap items-center gap-2.5" }, [
                  createVNode(_component_UButton, {
                    color: "info",
                    variant: "soft",
                    icon: "ph:sliders-horizontal",
                    size: "sm",
                    onClick: openHomeSettingsModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u9996\u9875\u642D\u914D\u4E0E\u5C55\u793A\u8BBE\u7F6E ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:arrow-counter-clockwise",
                    size: "sm",
                    loading: syncing.value,
                    onClick: confirmSyncSeed
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u540C\u6B65\u79CD\u5B50\u57FA\u51C6 ")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:plus",
                    size: "sm",
                    onClick: openAddModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u65B0\u589E\u6A21\u578B ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: saving.value,
                    icon: "ph:floppy-disk",
                    size: "sm",
                    onClick: saveBatch
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FDD\u5B58\u8868\u683C\u4FEE\u6539 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              icon: "ph:magnifying-glass",
              placeholder: "\u641C\u7D22\u6A21\u578B\u540D\u79F0\u3001\u6807\u8BC6 (slug) \u6216\u5382\u5546...",
              class: "w-64",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedVendorFilter.value,
              "onUpdate:modelValue": ($event) => selectedVendorFilter.value = $event,
              items: vendorFilterOptions,
              class: "w-40",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-3"${_scopeId}><span class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>\u9996\u9875\u573A\u666F\uFF1A</span>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: homeScene.value,
              "onUpdate:modelValue": ($event) => homeScene.value = $event,
              items: unref(sceneOptions),
              class: "w-40",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-between text-xs text-gray-400"${_scopeId}><span${_scopeId}>\u5171\u6536\u5F55 <strong${_scopeId}>${ssrInterpolate(modelsList.value.length)}</strong> \u6B3E\u6A21\u578B (\u5F53\u524D\u663E\u793A <strong${_scopeId}>${ssrInterpolate(filteredModels.value.length)}</strong> \u6B3E)</span>`);
            if (savedAt.value) {
              _push2(`<span${_scopeId}>\u6700\u8FD1\u4FDD\u5B58\u65F6\u95F4\uFF1A${ssrInterpolate(savedAt.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="overflow-x-auto mt-4"${_scopeId}><table class="w-full min-w-[960px] text-sm"${_scopeId}><thead${_scopeId}><tr class="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700"${_scopeId}><th class="py-2.5 pr-4 w-52"${_scopeId}>\u6A21\u578B\u540D\u79F0 / Slug</th><th class="py-2.5 pr-4 w-32"${_scopeId}>\u5382\u5546</th><th class="py-2.5 pr-4 w-28"${_scopeId}>\u8F93\u5165\u4EF7 (\xA5/$)</th><th class="py-2.5 pr-4 w-28"${_scopeId}>\u8F93\u51FA\u4EF7 (\xA5/$)</th><th class="py-2.5 pr-4 w-24"${_scopeId}>\u7EFC\u5408 / \u4EE3\u7801\u5206</th><th class="py-2.5 pr-4 w-36"${_scopeId}>\u6807\u7B7E</th><th class="py-2.5 pr-4 w-16 text-center"${_scopeId}>\u9690\u85CF</th><th class="py-2.5 text-right w-36"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(filteredModels.value, (row) => {
              var _a, _b, _c, _d;
              _push2(`<tr class="${ssrRenderClass([row.hidden ? "opacity-50 bg-gray-50/30" : "", "border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="py-2.5 pr-4"${_scopeId}><div class="font-medium text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(row.name)}</span>`);
              if (row.reasoning) {
                _push2(`<span class="rounded bg-purple-50 dark:bg-purple-950/60 px-1 py-0.2 text-[10px] text-purple-600 dark:text-purple-400"${_scopeId}>\u63A8\u7406</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (row.isFree) {
                _push2(`<span class="rounded bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.2 text-[10px] text-emerald-600 dark:text-emerald-400"${_scopeId}>\u514D\u8D39</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="text-xs text-gray-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(row.slug)}</div></td><td class="py-2.5 pr-4 whitespace-nowrap text-xs text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(getVendorLabel(row.vendor))}</td><td class="py-2.5 pr-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: row.price.input,
                "onUpdate:modelValue": ($event) => row.price.input = $event,
                modelModifiers: { number: true },
                type: "number",
                min: "0",
                step: "0.01",
                class: "w-24",
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 pr-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: row.price.output,
                "onUpdate:modelValue": ($event) => row.price.output = $event,
                modelModifiers: { number: true },
                type: "number",
                min: "0",
                step: "0.01",
                class: "w-24",
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 pr-4 text-xs font-mono text-gray-600 dark:text-gray-300"${_scopeId}><span class="font-semibold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate((_b = (_a = row.scores) == null ? void 0 : _a.overall) != null ? _b : "\u2014")}</span><span class="text-gray-400 mx-1"${_scopeId}>/</span><span${_scopeId}>${ssrInterpolate((_d = (_c = row.scores) == null ? void 0 : _c.coding) != null ? _d : "\u2014")}</span></td><td class="py-2.5 pr-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: row.badgesStr,
                "onUpdate:modelValue": ($event) => row.badgesStr = $event,
                placeholder: "\u5982: \u6027\u4EF7\u6BD4\u4E4B\u738B",
                class: "w-36",
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 pr-4 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: row.hidden,
                "onUpdate:modelValue": ($event) => row.hidden = $event
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 text-right whitespace-nowrap"${_scopeId}><div class="flex items-center justify-end gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:pencil-simple",
                onClick: ($event) => openEditModal(row)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8BE6\u60C5 `);
                  } else {
                    return [
                      createTextVNode(" \u8BE6\u60C5 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                onClick: ($event) => confirmDelete(row)
              }, null, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
            if (!filteredModels.value.length) {
              _push2(`<div class="py-12 text-center text-sm text-gray-400"${_scopeId}> \u672A\u627E\u5230\u5339\u914D\u7684\u6A21\u578B\u6570\u636E </div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                    createVNode(_component_UInput, {
                      modelValue: searchQuery.value,
                      "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                      icon: "ph:magnifying-glass",
                      placeholder: "\u641C\u7D22\u6A21\u578B\u540D\u79F0\u3001\u6807\u8BC6 (slug) \u6216\u5382\u5546...",
                      class: "w-64",
                      size: "sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_USelect, {
                      modelValue: selectedVendorFilter.value,
                      "onUpdate:modelValue": ($event) => selectedVendorFilter.value = $event,
                      items: vendorFilterOptions,
                      class: "w-40",
                      size: "sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, "\u9996\u9875\u573A\u666F\uFF1A"),
                    createVNode(_component_USelect, {
                      modelValue: homeScene.value,
                      "onUpdate:modelValue": ($event) => homeScene.value = $event,
                      items: unref(sceneOptions),
                      class: "w-40",
                      size: "sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between text-xs text-gray-400" }, [
                  createVNode("span", null, [
                    createTextVNode("\u5171\u6536\u5F55 "),
                    createVNode("strong", null, toDisplayString(modelsList.value.length), 1),
                    createTextVNode(" \u6B3E\u6A21\u578B (\u5F53\u524D\u663E\u793A "),
                    createVNode("strong", null, toDisplayString(filteredModels.value.length), 1),
                    createTextVNode(" \u6B3E)")
                  ]),
                  savedAt.value ? (openBlock(), createBlock("span", { key: 0 }, "\u6700\u8FD1\u4FDD\u5B58\u65F6\u95F4\uFF1A" + toDisplayString(savedAt.value), 1)) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "overflow-x-auto mt-4" }, [
                createVNode("table", { class: "w-full min-w-[960px] text-sm" }, [
                  createVNode("thead", null, [
                    createVNode("tr", { class: "border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700" }, [
                      createVNode("th", { class: "py-2.5 pr-4 w-52" }, "\u6A21\u578B\u540D\u79F0 / Slug"),
                      createVNode("th", { class: "py-2.5 pr-4 w-32" }, "\u5382\u5546"),
                      createVNode("th", { class: "py-2.5 pr-4 w-28" }, "\u8F93\u5165\u4EF7 (\xA5/$)"),
                      createVNode("th", { class: "py-2.5 pr-4 w-28" }, "\u8F93\u51FA\u4EF7 (\xA5/$)"),
                      createVNode("th", { class: "py-2.5 pr-4 w-24" }, "\u7EFC\u5408 / \u4EE3\u7801\u5206"),
                      createVNode("th", { class: "py-2.5 pr-4 w-36" }, "\u6807\u7B7E"),
                      createVNode("th", { class: "py-2.5 pr-4 w-16 text-center" }, "\u9690\u85CF"),
                      createVNode("th", { class: "py-2.5 text-right w-36" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredModels.value, (row) => {
                      var _a, _b, _c, _d;
                      return openBlock(), createBlock("tr", {
                        key: row.slug,
                        class: ["border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/40 transition-colors", row.hidden ? "opacity-50 bg-gray-50/30" : ""]
                      }, [
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode("div", { class: "font-medium text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                            createVNode("span", null, toDisplayString(row.name), 1),
                            row.reasoning ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "rounded bg-purple-50 dark:bg-purple-950/60 px-1 py-0.2 text-[10px] text-purple-600 dark:text-purple-400"
                            }, "\u63A8\u7406")) : createCommentVNode("", true),
                            row.isFree ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "rounded bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.2 text-[10px] text-emerald-600 dark:text-emerald-400"
                            }, "\u514D\u8D39")) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "text-xs text-gray-400 font-mono mt-0.5" }, toDisplayString(row.slug), 1)
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4 whitespace-nowrap text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(getVendorLabel(row.vendor)), 1),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode(_component_UInput, {
                            modelValue: row.price.input,
                            "onUpdate:modelValue": ($event) => row.price.input = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "0",
                            step: "0.01",
                            class: "w-24",
                            size: "xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode(_component_UInput, {
                            modelValue: row.price.output,
                            "onUpdate:modelValue": ($event) => row.price.output = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "0",
                            step: "0.01",
                            class: "w-24",
                            size: "xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4 text-xs font-mono text-gray-600 dark:text-gray-300" }, [
                          createVNode("span", { class: "font-semibold text-blue-600 dark:text-blue-400" }, toDisplayString((_b = (_a = row.scores) == null ? void 0 : _a.overall) != null ? _b : "\u2014"), 1),
                          createVNode("span", { class: "text-gray-400 mx-1" }, "/"),
                          createVNode("span", null, toDisplayString((_d = (_c = row.scores) == null ? void 0 : _c.coding) != null ? _d : "\u2014"), 1)
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode(_component_UInput, {
                            modelValue: row.badgesStr,
                            "onUpdate:modelValue": ($event) => row.badgesStr = $event,
                            placeholder: "\u5982: \u6027\u4EF7\u6BD4\u4E4B\u738B",
                            class: "w-36",
                            size: "xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4 text-center" }, [
                          createVNode(_component_UCheckbox, {
                            modelValue: row.hidden,
                            "onUpdate:modelValue": ($event) => row.hidden = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 text-right whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1.5" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:pencil-simple",
                              onClick: ($event) => openEditModal(row)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8BE6\u60C5 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              onClick: ($event) => confirmDelete(row)
                            }, null, 8, ["onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])
                ])
              ]),
              !filteredModels.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-12 text-center text-sm text-gray-400"
              }, " \u672A\u627E\u5230\u5339\u914D\u7684\u6A21\u578B\u6570\u636E ")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: isEditModalOpen.value,
        "onUpdate:modelValue": ($event) => isEditModalOpen.value = $event,
        maxWidth: "sm:max-w-5xl",
        title: isEditing.value ? `\u7F16\u8F91\u6A21\u578B\u53C2\u6570 \xB7 ${formModel.value.name || formModel.value.slug}` : "\u65B0\u589E AI \u6A21\u578B"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-3 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => isEditModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: modalSaving.value,
              icon: "ph:check",
              onClick: saveSingleModel
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u786E\u8BA4\u5E76\u4FDD\u5B58\u5165\u5E93 `);
                } else {
                  return [
                    createTextVNode(" \u786E\u8BA4\u5E76\u4FDD\u5B58\u5165\u5E93 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-3 w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  onClick: ($event) => isEditModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  loading: modalSaving.value,
                  icon: "ph:check",
                  onClick: saveSingleModel
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u786E\u8BA4\u5E76\u4FDD\u5B58\u5165\u5E93 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex flex-wrap items-center border-b border-gray-200 dark:border-gray-800 gap-2 sm:gap-6 pb-1"${_scopeId}><!--[-->`);
            ssrRenderList(modalTabs, (tab) => {
              _push2(`<button type="button" class="${ssrRenderClass([activeModalTab.value === tab.key ? "border-blue-500 text-blue-600 dark:text-blue-400 font-semibold" : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white", "pb-2.5 px-1 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: tab.icon,
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(tab.label)}</span></button>`);
            });
            _push2(`<!--]--></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "basic" ? null : { display: "none" })}"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u6A21\u578B\u5C55\u793A\u540D\u79F0",
              required: "",
              help: "\u524D\u53F0\u699C\u5355\u4E0E\u6807\u9898\u663E\u793A\u7684\u540D\u79F0\uFF0C\u5982 Claude 3.7 Sonnet"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.name,
                    "onUpdate:modelValue": ($event) => formModel.value.name = $event,
                    placeholder: "\u5982\uFF1AClaude 3.7 Sonnet",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.name,
                      "onUpdate:modelValue": ($event) => formModel.value.name = $event,
                      placeholder: "\u5982\uFF1AClaude 3.7 Sonnet",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u552F\u4E00\u6807\u8BC6 (Slug)",
              required: "",
              help: "\u7528\u4E8E\u751F\u6210\u8BBF\u95EE URL \u8DEF\u5F84\uFF0C\u5982 claude-3-7-sonnet"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.slug,
                    "onUpdate:modelValue": ($event) => formModel.value.slug = $event,
                    placeholder: "\u5982\uFF1Aclaude-3-7-sonnet",
                    disabled: isEditing.value,
                    class: "w-full font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.slug,
                      "onUpdate:modelValue": ($event) => formModel.value.slug = $event,
                      placeholder: "\u5982\uFF1Aclaude-3-7-sonnet",
                      disabled: isEditing.value,
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u6240\u5C5E\u4F9B\u5E94\u5546 / \u5382\u5546",
              required: "",
              help: "\u5173\u8054\u5BF9\u5E94\u7684\u5382\u5546\u5FBD\u6807\u4E0E\u54C1\u724C\u5206\u7C7B"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: formModel.value.vendor,
                    "onUpdate:modelValue": ($event) => formModel.value.vendor = $event,
                    items: unref(vendorSelectOptions),
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: formModel.value.vendor,
                      "onUpdate:modelValue": ($event) => formModel.value.vendor = $event,
                      items: unref(vendorSelectOptions),
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u5B98\u65B9\u8BA1\u8D39\u5E01\u79CD",
              required: "",
              help: "\u8BE5\u6A21\u578B\u7684\u539F\u59CB\u6807\u4EF7\u5E01\u79CD"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: formModel.value.currency,
                    "onUpdate:modelValue": ($event) => formModel.value.currency = $event,
                    items: [
                      { label: "\u7F8E\u5143 ($ / USD)", value: "USD" },
                      { label: "\u4EBA\u6C11\u5E01 (\xA5 / CNY)", value: "CNY" }
                    ],
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: formModel.value.currency,
                      "onUpdate:modelValue": ($event) => formModel.value.currency = $event,
                      items: [
                        { label: "\u7F8E\u5143 ($ / USD)", value: "USD" },
                        { label: "\u4EBA\u6C11\u5E01 (\xA5 / CNY)", value: "CNY" }
                      ],
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u53D1\u5E03\u65E5\u671F",
              help: "\u5382\u5546\u5B98\u65B9\u516C\u5F00\u4E0A\u7EBF\u7684\u65E5\u671F\uFF08\u9009\u586B\uFF09"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.releasedAt,
                    "onUpdate:modelValue": ($event) => formModel.value.releasedAt = $event,
                    placeholder: "\u5982\uFF1A2025-02-24",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.releasedAt,
                      "onUpdate:modelValue": ($event) => formModel.value.releasedAt = $event,
                      placeholder: "\u5982\uFF1A2025-02-24",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "API \u5B9E\u9645\u8C03\u7528\u6807\u8BC6",
              help: "\u5F00\u53D1\u8005\u8C03\u7528 SDK \u65F6\u586B\u5199\u7684 model \u53C2\u6570\uFF08\u9009\u586B\uFF09"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.apiName,
                    "onUpdate:modelValue": ($event) => formModel.value.apiName = $event,
                    placeholder: "\u5982\uFF1Aclaude-3-7-sonnet-20250219",
                    class: "w-full font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.apiName,
                      "onUpdate:modelValue": ($event) => formModel.value.apiName = $event,
                      placeholder: "\u5982\uFF1Aclaude-3-7-sonnet-20250219",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 p-4 space-y-3"${_scopeId}><span class="text-xs font-semibold text-gray-500 uppercase tracking-wider"${_scopeId}>\u7279\u6027\u6807\u8BB0\u5F00\u5173</span><div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: formModel.value.reasoning,
              "onUpdate:modelValue": ($event) => formModel.value.reasoning = $event
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u{1F9E0} \u6DF1\u5EA6\u63A8\u7406\u6A21\u578B</span></label><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: formModel.value.openWeights,
              "onUpdate:modelValue": ($event) => formModel.value.openWeights = $event
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u{1F310} \u5F00\u6E90\u6743\u91CD</span></label><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: formModel.value.isFree,
              "onUpdate:modelValue": ($event) => formModel.value.isFree = $event
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u{1F381} \u5B8C\u5168\u514D\u8D39</span></label><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: formModel.value.hidden,
              "onUpdate:modelValue": ($event) => formModel.value.hidden = $event
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u{1F6AB} \u9690\u85CF / \u4E0B\u67B6</span></label></div></div></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "pricing" ? null : { display: "none" })}"${_scopeId}><div class="p-3.5 rounded-lg bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-700 dark:text-blue-300"${_scopeId}> \u{1F4A1} \u4EF7\u683C\u5355\u4F4D\u7EDF\u4E00\u4E3A<strong${_scopeId}>\u6BCF\u767E\u4E07 Tokens (1M Tokens)</strong>\u3002\u524D\u53F0\u5C06\u81EA\u52A8\u6309 3:1 (\u8F93\u5165:\u8F93\u51FA) \u6D4B\u7B97\u52A0\u6743\u6DF7\u5408\u4EF7\u5E76\u6362\u7B97\u4E3A\u4EBA\u6C11\u5E01\u3002 </div><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u8F93\u5165 Token \u5355\u4EF7 (\u6BCF 1M Tokens)",
              required: "",
              help: `\u5F53\u524D\u5E01\u79CD: ${formModel.value.currency}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.price.input,
                    "onUpdate:modelValue": ($event) => formModel.value.price.input = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    step: "0.001",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.price.input,
                      "onUpdate:modelValue": ($event) => formModel.value.price.input = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      step: "0.001",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u8F93\u51FA Token \u5355\u4EF7 (\u6BCF 1M Tokens)",
              required: "",
              help: `\u5F53\u524D\u5E01\u79CD: ${formModel.value.currency}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.price.output,
                    "onUpdate:modelValue": ($event) => formModel.value.price.output = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    step: "0.001",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.price.output,
                      "onUpdate:modelValue": ($event) => formModel.value.price.output = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      step: "0.001",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Prompt \u7F13\u5B58\u547D\u4E2D\u8BFB\u53D6\u4EF7 (Cache Read)",
              help: "\u5382\u5546\u5B98\u65B9\u652F\u6301 Prompt Caching \u65F6\u7684\u547D\u4E2D\u5355\u4EF7\uFF08\u9009\u586B\uFF09"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.price.cacheRead,
                    "onUpdate:modelValue": ($event) => formModel.value.price.cacheRead = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    step: "0.001",
                    placeholder: "\u9009\u586B\uFF0C\u5982 0.3",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.price.cacheRead,
                      "onUpdate:modelValue": ($event) => formModel.value.price.cacheRead = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      step: "0.001",
                      placeholder: "\u9009\u586B\uFF0C\u5982 0.3",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Prompt \u7F13\u5B58\u5199\u5165\u4EF7 (Cache Write)",
              help: "\u7F13\u5B58\u9996\u6B21\u5199\u5165\u5355\u4EF7\uFF08\u9009\u586B\uFF09"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.price.cacheWrite,
                    "onUpdate:modelValue": ($event) => formModel.value.price.cacheWrite = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    step: "0.001",
                    placeholder: "\u9009\u586B\uFF0C\u5982 3.75",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.price.cacheWrite,
                      "onUpdate:modelValue": ($event) => formModel.value.price.cacheWrite = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      step: "0.001",
                      placeholder: "\u9009\u586B\uFF0C\u5982 3.75",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "scores" ? null : { display: "none" })}"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u4E0A\u4E0B\u6587\u7A97\u53E3\u5927\u5C0F (Context Window)",
              required: "",
              help: "\u5355\u4F4D Tokens\uFF0C\u5982 128,000 / 200,000 / 1,000,000"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.contextWindow,
                    "onUpdate:modelValue": ($event) => formModel.value.contextWindow = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "1000",
                    step: "1000",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.contextWindow,
                      "onUpdate:modelValue": ($event) => formModel.value.contextWindow = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1000",
                      step: "1000",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u5355\u6B21\u6700\u5927\u8F93\u51FA\u9650\u5236 (Max Output)",
              help: "\u6A21\u578B\u5355\u6B21\u54CD\u5E94\u652F\u6301\u7684\u6700\u5927 Token \u6570\uFF08\u9009\u586B\uFF09"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.maxOutputTokens,
                    "onUpdate:modelValue": ($event) => formModel.value.maxOutputTokens = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "1000",
                    step: "1000",
                    placeholder: "\u5982 8192 \u6216 64000",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.maxOutputTokens,
                      "onUpdate:modelValue": ($event) => formModel.value.maxOutputTokens = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1000",
                      step: "1000",
                      placeholder: "\u5982 8192 \u6216 64000",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs font-semibold text-gray-500 uppercase tracking-wider"${_scopeId}>5 \u7EF4\u80FD\u529B\u5B9E\u6D4B\u6253\u5206 (0 - 100)</span><span class="text-xs text-gray-400"${_scopeId}>\u65E0\u5B98\u65B9\u53EF\u6838\u9A8C\u6765\u6E90\u7684\u7EF4\u5EA6\u53EF\u7559\u7A7A</span></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u{1F3C6} \u7EFC\u5408\u6307\u6570 (Overall)",
              help: "\u7EFC\u5408\u80FD\u529B\u57FA\u51C6\u5206"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.scores.overall,
                    "onUpdate:modelValue": ($event) => formModel.value.scores.overall = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    max: "100",
                    placeholder: "\u5982 64"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.scores.overall,
                      "onUpdate:modelValue": ($event) => formModel.value.scores.overall = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      max: "100",
                      placeholder: "\u5982 64"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u{1F4BB} \u4EE3\u7801\u4E0E\u7F16\u7A0B\u80FD\u529B (Coding)",
              help: "\u4EE3\u7801\u751F\u6210\u4E0E Bug \u4FEE\u590D"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.scores.coding,
                    "onUpdate:modelValue": ($event) => formModel.value.scores.coding = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    max: "100",
                    placeholder: "\u5982 75"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.scores.coding,
                      "onUpdate:modelValue": ($event) => formModel.value.scores.coding = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      max: "100",
                      placeholder: "\u5982 75"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u{1F9E0} \u6DF1\u5EA6\u63A8\u7406\u4E0E\u903B\u8F91 (Reasoning)",
              help: "\u590D\u6742\u591A\u6B65\u601D\u8003"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.scores.reasoning,
                    "onUpdate:modelValue": ($event) => formModel.value.scores.reasoning = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    max: "100",
                    placeholder: "\u5982 70"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.scores.reasoning,
                      "onUpdate:modelValue": ($event) => formModel.value.scores.reasoning = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      max: "100",
                      placeholder: "\u5982 70"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u{1F1E8}\u{1F1F3} \u4E2D\u6587\u7406\u89E3\u4E0E\u8868\u8FBE (Chinese)",
              help: "\u4E2D\u6587\u8BED\u5883\u4E0E\u5BF9\u9F50"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.scores.chinese,
                    "onUpdate:modelValue": ($event) => formModel.value.scores.chinese = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    max: "100",
                    placeholder: "\u5982 65"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.scores.chinese,
                      "onUpdate:modelValue": ($event) => formModel.value.scores.chinese = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      max: "100",
                      placeholder: "\u5982 65"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u{1F916} Agent \u534F\u4F5C\u4E0E\u5DE5\u5177 (Agentic)",
              help: "Function Calling \u4E0E\u5DE5\u5177\u94FE"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.scores.agentic,
                    "onUpdate:modelValue": ($event) => formModel.value.scores.agentic = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    max: "100",
                    placeholder: "\u5982 68"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.scores.agentic,
                      "onUpdate:modelValue": ($event) => formModel.value.scores.agentic = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      max: "100",
                      placeholder: "\u5982 68"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "content" ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u7AD9\u957F\u4E00\u53E5\u8BDD\u4F53\u611F\u70B9\u8BC4 (Summary)",
              help: "\u5C55\u793A\u5728\u9996\u9875\u699C\u5355\u4E0E\u6A21\u578B\u8BE6\u60C5\u9875\u9876\u90E8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: formModel.value.summary,
                    "onUpdate:modelValue": ($event) => formModel.value.summary = $event,
                    rows: 3,
                    placeholder: "\u603B\u7ED3\u8BE5\u6A21\u578B\u7684\u957F\u5904\u3001\u77ED\u677F\u4E0E\u6700\u9002\u5408\u4F5C\u4E1A\u573A\u666F\uFF08\u771F\u5B9E\u5B9E\u6D4B\u4F53\u611F\uFF09...",
                    class: "w-full text-sm leading-relaxed"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: formModel.value.summary,
                      "onUpdate:modelValue": ($event) => formModel.value.summary = $event,
                      rows: 3,
                      placeholder: "\u603B\u7ED3\u8BE5\u6A21\u578B\u7684\u957F\u5904\u3001\u77ED\u677F\u4E0E\u6700\u9002\u5408\u4F5C\u4E1A\u573A\u666F\uFF08\u771F\u5B9E\u5B9E\u6D4B\u4F53\u611F\uFF09...",
                      class: "w-full text-sm leading-relaxed"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u9AD8\u4EAE\u4FC3\u9500\u6807\u7B7E (Badges)",
              help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u4EE3\u7801\u4E3B\u529B, \u6027\u4EF7\u6BD4\u4E4B\u738B"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.badgesInput,
                    "onUpdate:modelValue": ($event) => formModel.value.badgesInput = $event,
                    placeholder: "\u4EE3\u7801\u4E3B\u529B, \u6027\u4EF7\u6BD4\u4E4B\u738B",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.badgesInput,
                      "onUpdate:modelValue": ($event) => formModel.value.badgesInput = $event,
                      placeholder: "\u4EE3\u7801\u4E3B\u529B, \u6027\u4EF7\u6BD4\u4E4B\u738B",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u9002\u7528\u573A\u666F\u6807\u7B7E (Scenes)",
              help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u4EE3\u7801\u8865\u5168, \u957F\u6587\u5206\u6790, \u590D\u6742\u91CD\u6784"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: formModel.value.scenesInput,
                    "onUpdate:modelValue": ($event) => formModel.value.scenesInput = $event,
                    placeholder: "\u4EE3\u7801\u8865\u5168, \u590D\u6742\u91CD\u6784, \u65E5\u5E38\u95EE\u7B54",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: formModel.value.scenesInput,
                      "onUpdate:modelValue": ($event) => formModel.value.scenesInput = $event,
                      placeholder: "\u4EE3\u7801\u8865\u5168, \u590D\u6742\u91CD\u6784, \u65E5\u5E38\u95EE\u7B54",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u6838\u5FC3\u4EAE\u70B9 (Highlights)",
              help: "\u6BCF\u884C\u4E00\u6761"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: formModel.value.highlightsInput,
                    "onUpdate:modelValue": ($event) => formModel.value.highlightsInput = $event,
                    rows: 4,
                    placeholder: "\u6BCF\u884C\u8F93\u5165\u4E00\u6761\u4EAE\u70B9\uFF0C\u5982\uFF1A\n\u9996\u5B57\u5EF6\u8FDF\u6781\u4F4E\uFF0C\u5199\u4EE3\u7801\u65E0\u611F\n\u539F\u751F\u652F\u6301 100 \u4E07\u957F\u4E0A\u4E0B\u6587",
                    class: "w-full text-xs font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: formModel.value.highlightsInput,
                      "onUpdate:modelValue": ($event) => formModel.value.highlightsInput = $event,
                      rows: 4,
                      placeholder: "\u6BCF\u884C\u8F93\u5165\u4E00\u6761\u4EAE\u70B9\uFF0C\u5982\uFF1A\n\u9996\u5B57\u5EF6\u8FDF\u6781\u4F4E\uFF0C\u5199\u4EE3\u7801\u65E0\u611F\n\u539F\u751F\u652F\u6301 100 \u4E07\u957F\u4E0A\u4E0B\u6587",
                      class: "w-full text-xs font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u907F\u5751\u4E0E\u6CE8\u610F\u4E8B\u9879 (Caveats)",
              help: "\u6BCF\u884C\u4E00\u6761"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: formModel.value.caveatsInput,
                    "onUpdate:modelValue": ($event) => formModel.value.caveatsInput = $event,
                    rows: 4,
                    placeholder: "\u6BCF\u884C\u8F93\u5165\u4E00\u6761\u907F\u5751\u63D0\u9192\uFF0C\u5982\uFF1A\n\u9AD8\u5CF0\u671F\u5BB9\u6613\u89E6\u53D1\u5B98\u65B9 429 \u9650\u6D41\n\u601D\u8003\u94FE\u6D88\u8017\u989D\u5916\u8F93\u51FA Token",
                    class: "w-full text-xs font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: formModel.value.caveatsInput,
                      "onUpdate:modelValue": ($event) => formModel.value.caveatsInput = $event,
                      rows: 4,
                      placeholder: "\u6BCF\u884C\u8F93\u5165\u4E00\u6761\u907F\u5751\u63D0\u9192\uFF0C\u5982\uFF1A\n\u9AD8\u5CF0\u671F\u5BB9\u6613\u89E6\u53D1\u5B98\u65B9 429 \u9650\u6D41\n\u601D\u8003\u94FE\u6D88\u8017\u989D\u5916\u8F93\u51FA Token",
                      class: "w-full text-xs font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex flex-wrap items-center border-b border-gray-200 dark:border-gray-800 gap-2 sm:gap-6 pb-1" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(modalTabs, (tab) => {
                    return createVNode("button", {
                      key: tab.key,
                      type: "button",
                      class: ["pb-2.5 px-1 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5", activeModalTab.value === tab.key ? "border-blue-500 text-blue-600 dark:text-blue-400 font-semibold" : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"],
                      onClick: ($event) => activeModalTab.value = tab.key
                    }, [
                      createVNode(_component_UIcon, {
                        name: tab.icon,
                        class: "w-4 h-4"
                      }, null, 8, ["name"]),
                      createVNode("span", null, toDisplayString(tab.label), 1)
                    ], 10, ["onClick"]);
                  }), 64))
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u6A21\u578B\u5C55\u793A\u540D\u79F0",
                      required: "",
                      help: "\u524D\u53F0\u699C\u5355\u4E0E\u6807\u9898\u663E\u793A\u7684\u540D\u79F0\uFF0C\u5982 Claude 3.7 Sonnet"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.name,
                          "onUpdate:modelValue": ($event) => formModel.value.name = $event,
                          placeholder: "\u5982\uFF1AClaude 3.7 Sonnet",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u552F\u4E00\u6807\u8BC6 (Slug)",
                      required: "",
                      help: "\u7528\u4E8E\u751F\u6210\u8BBF\u95EE URL \u8DEF\u5F84\uFF0C\u5982 claude-3-7-sonnet"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.slug,
                          "onUpdate:modelValue": ($event) => formModel.value.slug = $event,
                          placeholder: "\u5982\uFF1Aclaude-3-7-sonnet",
                          disabled: isEditing.value,
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u6240\u5C5E\u4F9B\u5E94\u5546 / \u5382\u5546",
                      required: "",
                      help: "\u5173\u8054\u5BF9\u5E94\u7684\u5382\u5546\u5FBD\u6807\u4E0E\u54C1\u724C\u5206\u7C7B"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: formModel.value.vendor,
                          "onUpdate:modelValue": ($event) => formModel.value.vendor = $event,
                          items: unref(vendorSelectOptions),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5B98\u65B9\u8BA1\u8D39\u5E01\u79CD",
                      required: "",
                      help: "\u8BE5\u6A21\u578B\u7684\u539F\u59CB\u6807\u4EF7\u5E01\u79CD"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: formModel.value.currency,
                          "onUpdate:modelValue": ($event) => formModel.value.currency = $event,
                          items: [
                            { label: "\u7F8E\u5143 ($ / USD)", value: "USD" },
                            { label: "\u4EBA\u6C11\u5E01 (\xA5 / CNY)", value: "CNY" }
                          ],
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u53D1\u5E03\u65E5\u671F",
                      help: "\u5382\u5546\u5B98\u65B9\u516C\u5F00\u4E0A\u7EBF\u7684\u65E5\u671F\uFF08\u9009\u586B\uFF09"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.releasedAt,
                          "onUpdate:modelValue": ($event) => formModel.value.releasedAt = $event,
                          placeholder: "\u5982\uFF1A2025-02-24",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "API \u5B9E\u9645\u8C03\u7528\u6807\u8BC6",
                      help: "\u5F00\u53D1\u8005\u8C03\u7528 SDK \u65F6\u586B\u5199\u7684 model \u53C2\u6570\uFF08\u9009\u586B\uFF09"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.apiName,
                          "onUpdate:modelValue": ($event) => formModel.value.apiName = $event,
                          placeholder: "\u5982\uFF1Aclaude-3-7-sonnet-20250219",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 p-4 space-y-3" }, [
                    createVNode("span", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "\u7279\u6027\u6807\u8BB0\u5F00\u5173"),
                    createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1" }, [
                      createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                        createVNode(_component_UCheckbox, {
                          modelValue: formModel.value.reasoning,
                          "onUpdate:modelValue": ($event) => formModel.value.reasoning = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, "\u{1F9E0} \u6DF1\u5EA6\u63A8\u7406\u6A21\u578B")
                      ]),
                      createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                        createVNode(_component_UCheckbox, {
                          modelValue: formModel.value.openWeights,
                          "onUpdate:modelValue": ($event) => formModel.value.openWeights = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, "\u{1F310} \u5F00\u6E90\u6743\u91CD")
                      ]),
                      createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                        createVNode(_component_UCheckbox, {
                          modelValue: formModel.value.isFree,
                          "onUpdate:modelValue": ($event) => formModel.value.isFree = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, "\u{1F381} \u5B8C\u5168\u514D\u8D39")
                      ]),
                      createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                        createVNode(_component_UCheckbox, {
                          modelValue: formModel.value.hidden,
                          "onUpdate:modelValue": ($event) => formModel.value.hidden = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, "\u{1F6AB} \u9690\u85CF / \u4E0B\u67B6")
                      ])
                    ])
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "basic"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "p-3.5 rounded-lg bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-700 dark:text-blue-300" }, [
                    createTextVNode(" \u{1F4A1} \u4EF7\u683C\u5355\u4F4D\u7EDF\u4E00\u4E3A"),
                    createVNode("strong", null, "\u6BCF\u767E\u4E07 Tokens (1M Tokens)"),
                    createTextVNode("\u3002\u524D\u53F0\u5C06\u81EA\u52A8\u6309 3:1 (\u8F93\u5165:\u8F93\u51FA) \u6D4B\u7B97\u52A0\u6743\u6DF7\u5408\u4EF7\u5E76\u6362\u7B97\u4E3A\u4EBA\u6C11\u5E01\u3002 ")
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u8F93\u5165 Token \u5355\u4EF7 (\u6BCF 1M Tokens)",
                      required: "",
                      help: `\u5F53\u524D\u5E01\u79CD: ${formModel.value.currency}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.price.input,
                          "onUpdate:modelValue": ($event) => formModel.value.price.input = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "0",
                          step: "0.001",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["help"]),
                    createVNode(_component_UFormField, {
                      label: "\u8F93\u51FA Token \u5355\u4EF7 (\u6BCF 1M Tokens)",
                      required: "",
                      help: `\u5F53\u524D\u5E01\u79CD: ${formModel.value.currency}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.price.output,
                          "onUpdate:modelValue": ($event) => formModel.value.price.output = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "0",
                          step: "0.001",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["help"]),
                    createVNode(_component_UFormField, {
                      label: "Prompt \u7F13\u5B58\u547D\u4E2D\u8BFB\u53D6\u4EF7 (Cache Read)",
                      help: "\u5382\u5546\u5B98\u65B9\u652F\u6301 Prompt Caching \u65F6\u7684\u547D\u4E2D\u5355\u4EF7\uFF08\u9009\u586B\uFF09"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.price.cacheRead,
                          "onUpdate:modelValue": ($event) => formModel.value.price.cacheRead = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "0",
                          step: "0.001",
                          placeholder: "\u9009\u586B\uFF0C\u5982 0.3",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "Prompt \u7F13\u5B58\u5199\u5165\u4EF7 (Cache Write)",
                      help: "\u7F13\u5B58\u9996\u6B21\u5199\u5165\u5355\u4EF7\uFF08\u9009\u586B\uFF09"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.price.cacheWrite,
                          "onUpdate:modelValue": ($event) => formModel.value.price.cacheWrite = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "0",
                          step: "0.001",
                          placeholder: "\u9009\u586B\uFF0C\u5982 3.75",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "pricing"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                    createVNode(_component_UFormField, {
                      label: "\u4E0A\u4E0B\u6587\u7A97\u53E3\u5927\u5C0F (Context Window)",
                      required: "",
                      help: "\u5355\u4F4D Tokens\uFF0C\u5982 128,000 / 200,000 / 1,000,000"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.contextWindow,
                          "onUpdate:modelValue": ($event) => formModel.value.contextWindow = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "1000",
                          step: "1000",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5355\u6B21\u6700\u5927\u8F93\u51FA\u9650\u5236 (Max Output)",
                      help: "\u6A21\u578B\u5355\u6B21\u54CD\u5E94\u652F\u6301\u7684\u6700\u5927 Token \u6570\uFF08\u9009\u586B\uFF09"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.maxOutputTokens,
                          "onUpdate:modelValue": ($event) => formModel.value.maxOutputTokens = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "1000",
                          step: "1000",
                          placeholder: "\u5982 8192 \u6216 64000",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "space-y-3" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "5 \u7EF4\u80FD\u529B\u5B9E\u6D4B\u6253\u5206 (0 - 100)"),
                      createVNode("span", { class: "text-xs text-gray-400" }, "\u65E0\u5B98\u65B9\u53EF\u6838\u9A8C\u6765\u6E90\u7684\u7EF4\u5EA6\u53EF\u7559\u7A7A")
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-4" }, [
                      createVNode(_component_UFormField, {
                        label: "\u{1F3C6} \u7EFC\u5408\u6307\u6570 (Overall)",
                        help: "\u7EFC\u5408\u80FD\u529B\u57FA\u51C6\u5206"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: formModel.value.scores.overall,
                            "onUpdate:modelValue": ($event) => formModel.value.scores.overall = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "0",
                            max: "100",
                            placeholder: "\u5982 64"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormField, {
                        label: "\u{1F4BB} \u4EE3\u7801\u4E0E\u7F16\u7A0B\u80FD\u529B (Coding)",
                        help: "\u4EE3\u7801\u751F\u6210\u4E0E Bug \u4FEE\u590D"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: formModel.value.scores.coding,
                            "onUpdate:modelValue": ($event) => formModel.value.scores.coding = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "0",
                            max: "100",
                            placeholder: "\u5982 75"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormField, {
                        label: "\u{1F9E0} \u6DF1\u5EA6\u63A8\u7406\u4E0E\u903B\u8F91 (Reasoning)",
                        help: "\u590D\u6742\u591A\u6B65\u601D\u8003"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: formModel.value.scores.reasoning,
                            "onUpdate:modelValue": ($event) => formModel.value.scores.reasoning = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "0",
                            max: "100",
                            placeholder: "\u5982 70"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormField, {
                        label: "\u{1F1E8}\u{1F1F3} \u4E2D\u6587\u7406\u89E3\u4E0E\u8868\u8FBE (Chinese)",
                        help: "\u4E2D\u6587\u8BED\u5883\u4E0E\u5BF9\u9F50"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: formModel.value.scores.chinese,
                            "onUpdate:modelValue": ($event) => formModel.value.scores.chinese = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "0",
                            max: "100",
                            placeholder: "\u5982 65"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormField, {
                        label: "\u{1F916} Agent \u534F\u4F5C\u4E0E\u5DE5\u5177 (Agentic)",
                        help: "Function Calling \u4E0E\u5DE5\u5177\u94FE"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: formModel.value.scores.agentic,
                            "onUpdate:modelValue": ($event) => formModel.value.scores.agentic = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "0",
                            max: "100",
                            placeholder: "\u5982 68"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "scores"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode(_component_UFormField, {
                    label: "\u7AD9\u957F\u4E00\u53E5\u8BDD\u4F53\u611F\u70B9\u8BC4 (Summary)",
                    help: "\u5C55\u793A\u5728\u9996\u9875\u699C\u5355\u4E0E\u6A21\u578B\u8BE6\u60C5\u9875\u9876\u90E8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: formModel.value.summary,
                        "onUpdate:modelValue": ($event) => formModel.value.summary = $event,
                        rows: 3,
                        placeholder: "\u603B\u7ED3\u8BE5\u6A21\u578B\u7684\u957F\u5904\u3001\u77ED\u677F\u4E0E\u6700\u9002\u5408\u4F5C\u4E1A\u573A\u666F\uFF08\u771F\u5B9E\u5B9E\u6D4B\u4F53\u611F\uFF09...",
                        class: "w-full text-sm leading-relaxed"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u9AD8\u4EAE\u4FC3\u9500\u6807\u7B7E (Badges)",
                      help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u4EE3\u7801\u4E3B\u529B, \u6027\u4EF7\u6BD4\u4E4B\u738B"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.badgesInput,
                          "onUpdate:modelValue": ($event) => formModel.value.badgesInput = $event,
                          placeholder: "\u4EE3\u7801\u4E3B\u529B, \u6027\u4EF7\u6BD4\u4E4B\u738B",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u9002\u7528\u573A\u666F\u6807\u7B7E (Scenes)",
                      help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u4EE3\u7801\u8865\u5168, \u957F\u6587\u5206\u6790, \u590D\u6742\u91CD\u6784"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: formModel.value.scenesInput,
                          "onUpdate:modelValue": ($event) => formModel.value.scenesInput = $event,
                          placeholder: "\u4EE3\u7801\u8865\u5168, \u590D\u6742\u91CD\u6784, \u65E5\u5E38\u95EE\u7B54",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u6838\u5FC3\u4EAE\u70B9 (Highlights)",
                      help: "\u6BCF\u884C\u4E00\u6761"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: formModel.value.highlightsInput,
                          "onUpdate:modelValue": ($event) => formModel.value.highlightsInput = $event,
                          rows: 4,
                          placeholder: "\u6BCF\u884C\u8F93\u5165\u4E00\u6761\u4EAE\u70B9\uFF0C\u5982\uFF1A\n\u9996\u5B57\u5EF6\u8FDF\u6781\u4F4E\uFF0C\u5199\u4EE3\u7801\u65E0\u611F\n\u539F\u751F\u652F\u6301 100 \u4E07\u957F\u4E0A\u4E0B\u6587",
                          class: "w-full text-xs font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u907F\u5751\u4E0E\u6CE8\u610F\u4E8B\u9879 (Caveats)",
                      help: "\u6BCF\u884C\u4E00\u6761"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: formModel.value.caveatsInput,
                          "onUpdate:modelValue": ($event) => formModel.value.caveatsInput = $event,
                          rows: 4,
                          placeholder: "\u6BCF\u884C\u8F93\u5165\u4E00\u6761\u907F\u5751\u63D0\u9192\uFF0C\u5982\uFF1A\n\u9AD8\u5CF0\u671F\u5BB9\u6613\u89E6\u53D1\u5B98\u65B9 429 \u9650\u6D41\n\u601D\u8003\u94FE\u6D88\u8017\u989D\u5916\u8F93\u51FA Token",
                          class: "w-full text-xs font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "content"]
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FullScreenModal, {
        open: isHomeSettingsModalOpen.value,
        "onUpdate:open": ($event) => isHomeSettingsModalOpen.value = $event,
        title: "\u{1F3E0} \u9996\u9875\u300C\u6211\u7684\u611F\u53D7\u300D\u4E0E\u7AD9\u957F\u5B9E\u6218\u642D\u914D\u8BBE\u7F6E",
        maxWidth: "sm:max-w-4xl"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              icon: "ph:arrow-counter-clockwise",
              onClick: resetHomeSettingsToDefault
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u91CD\u7F6E\u4E3A\u9ED8\u8BA4 `);
                } else {
                  return [
                    createTextVNode(" \u91CD\u7F6E\u4E3A\u9ED8\u8BA4 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: ($event) => isHomeSettingsModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              size: "sm",
              icon: "ph:check",
              loading: homeSettingsSaving.value,
              onClick: saveHomeSettings
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u5E76\u7ACB\u5373\u751F\u6548 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u7ACB\u5373\u751F\u6548 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "sm",
                  icon: "ph:arrow-counter-clockwise",
                  onClick: resetHomeSettingsToDefault
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u91CD\u7F6E\u4E3A\u9ED8\u8BA4 ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex items-center gap-2.5" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "sm",
                    onClick: ($event) => isHomeSettingsModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D6\u6D88 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    size: "sm",
                    icon: "ph:check",
                    loading: homeSettingsSaving.value,
                    onClick: saveHomeSettings
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FDD\u5B58\u5E76\u7ACB\u5373\u751F\u6548 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-3"${_scopeId}><button type="button" class="${ssrRenderClass([activeHomeSettingsTab.value === "combo" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 shadow-2xs font-semibold" : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:stack",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>1. \u7AD9\u957F\u65E5\u5E38\u5B9E\u6218\u642D\u914D (Combo)</span></button><button type="button" class="${ssrRenderClass([activeHomeSettingsTab.value === "impressions" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 shadow-2xs font-semibold" : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:trophy",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>2. \u300C\u6211\u7684\u611F\u53D7\u300D\u5C55\u793A\u4E0E\u7CBE\u9009</span></button></div><div class="space-y-5" style="${ssrRenderStyle(activeHomeSettingsTab.value === "combo" ? null : { display: "none" })}"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>\u{1F4A1} \u7AD9\u957F\u4E3B\u529B\u7EC4\u5408\u914D\u7F6E</span><span class="text-xs font-normal text-gray-500 dark:text-gray-400"${_scopeId}>\uFF08\u5728\u9996\u9875\u6392\u884C\u699C\u4E0B\u65B9\u5C55\u793A\u4F60\u7684\u65E5\u5E38\u4E3B\u529B\u5DE5\u4F5C\u6D41\uFF09</span></h4></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:plus",
              size: "xs",
              onClick: addComboItem
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6DFB\u52A0\u642D\u914D\u9879 `);
                } else {
                  return [
                    createTextVNode(" \u6DFB\u52A0\u642D\u914D\u9879 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-3"${_scopeId}><!--[-->`);
            ssrRenderList(homeSettingsForm.value.dailyCombo, (item, index) => {
              _push2(`<div class="flex flex-col sm:flex-row sm:items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50"${_scopeId}><div class="flex items-center gap-2 sm:w-32 shrink-0"${_scopeId}><span class="text-xs font-mono text-gray-400"${_scopeId}>#${ssrInterpolate(index + 1)}</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: item.tag,
                "onUpdate:modelValue": ($event) => item.tag = $event,
                placeholder: "\u65E5\u5E38 70%",
                size: "xs",
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: item.model,
                "onUpdate:modelValue": ($event) => item.model = $event,
                placeholder: "\u6A21\u578B\u540D\u79F0 (\u5982 Gemini 2.5 Flash)",
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="sm:w-44"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: item.note,
                "onUpdate:modelValue": ($event) => item.note = $event,
                placeholder: "\u573A\u666F\u7B80\u8FF0 (\u5982 \u6781\u901F\u65E0\u611F)",
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="sm:w-32 shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: item.color,
                "onUpdate:modelValue": ($event) => item.color = $event,
                items: colorOptions,
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center gap-1 shrink-0 justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:arrow-up",
                size: "xs",
                disabled: index === 0,
                onClick: ($event) => moveComboItem(index, -1)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:arrow-down",
                size: "xs",
                disabled: index === homeSettingsForm.value.dailyCombo.length - 1,
                onClick: ($event) => moveComboItem(index, 1)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                icon: "ph:trash",
                size: "xs",
                onClick: ($event) => removeComboItem(index)
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="mt-4 p-4 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"${_scopeId}><div class="text-xs font-medium text-gray-400 dark:text-gray-500 mb-2 flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:eye",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u9996\u9875\u5B9E\u65F6\u6548\u679C\u9884\u89C8\uFF1A</span></div><div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs"${_scopeId}><span class="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1"${_scopeId}><span${_scopeId}>\u{1F4A1}</span><span${_scopeId}>\u7AD9\u957F\u65E5\u5E38\u5B9E\u6218\u642D\u914D\uFF1A</span></span><!--[-->`);
            ssrRenderList(homeSettingsForm.value.dailyCombo, (combo, idx) => {
              _push2(`<!--[-->`);
              if (idx > 0) {
                _push2(`<span class="text-slate-300 dark:text-slate-700"${_scopeId}>\xB7</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-300"${_scopeId}><span class="${ssrRenderClass([getComboPreviewBadge(combo.color), "rounded px-1.5 py-0.5 text-[10px] font-semibold"])}"${_scopeId}>${ssrInterpolate(combo.tag || "\u9636\u6BB5")}</span><strong class="text-slate-800 dark:text-slate-100"${_scopeId}>${ssrInterpolate(combo.model || "\u6A21\u578B\u540D")}</strong>`);
              if (combo.note) {
                _push2(`<span class="text-slate-400 dark:text-slate-500 text-[11px]"${_scopeId}> (${ssrInterpolate(combo.note.replace(/^\((.*)\)$/, "$1"))}) </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><!--]-->`);
            });
            _push2(`<!--]--></div></div></div><div class="space-y-6" style="${ssrRenderStyle(activeHomeSettingsTab.value === "impressions" ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u9996\u9875\u300C\u6211\u7684\u611F\u53D7\u300D\u526F\u6807\u9898\u8BF4\u660E",
              description: "\u5C55\u793A\u5728\u9996\u9875\u6392\u884C\u699C\u6807\u9898\u4E0B\u65B9\u7684\u8BF4\u660E\u6587\u6848"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: homeSettingsForm.value.impressionsSubtitle,
                    "onUpdate:modelValue": ($event) => homeSettingsForm.value.impressionsSubtitle = $event,
                    placeholder: "\u57FA\u4E8E\u7AD9\u957F\u65E5\u5E38\u5168\u6808\u5F00\u53D1\u4E0E\u91CD\u6784\u7684\u771F\u5B9E\u4F53\u611F\u6253\u5206\uFF0C\u62D2\u7EDD\u4E91\u8BC4\u6D4B\u4E0E\u865A\u5047\u53C2\u6570\u3002",
                    rows: 2,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: homeSettingsForm.value.impressionsSubtitle,
                      "onUpdate:modelValue": ($event) => homeSettingsForm.value.impressionsSubtitle = $event,
                      placeholder: "\u57FA\u4E8E\u7AD9\u957F\u65E5\u5E38\u5168\u6808\u5F00\u53D1\u4E0E\u91CD\u6784\u7684\u771F\u5B9E\u4F53\u611F\u6253\u5206\uFF0C\u62D2\u7EDD\u4E91\u8BC4\u6D4B\u4E0E\u865A\u5047\u53C2\u6570\u3002",
                      rows: 2,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u9996\u9875\u7CBE\u9009\u6A21\u578B\u751F\u6210\u6A21\u5F0F",
              description: "\u9009\u62E9\u9996\u9875 4 \u6B3E\u63A8\u8350\u6A21\u578B\u7684\u6570\u636E\u6765\u6E90"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"${_scopeId2}><div class="${ssrRenderClass([homeSettingsForm.value.impressionsMode === "auto" ? "border-blue-500 bg-blue-50/40 dark:bg-blue-950/30" : "border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-900/30", "p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"${_scopeId2}><input type="radio"${ssrIncludeBooleanAttr(homeSettingsForm.value.impressionsMode === "auto") ? " checked" : ""} class="mt-1 text-blue-600"${_scopeId2}><div${_scopeId2}><div class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:sparkle",
                    class: "w-4 h-4 text-amber-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u81EA\u52A8\u667A\u80FD\u6A21\u5F0F (\u63A8\u8350)</span></div><p class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed"${_scopeId2}> \u7CFB\u7EDF\u6839\u636E\u6570\u636E\u5E93\u4E2D\u5404\u6A21\u578B\u7684\u7EFC\u5408\u8BC4\u5206\u4E0E\u5199\u4EE3\u7801\u80FD\u529B\u8BC4\u5206\uFF0C\u81EA\u52A8\u52A8\u6001\u6311\u9009\u5E76\u5C55\u793A Top 4 \u4E3B\u529B\u6A21\u578B\u3002 </p></div></div><div class="${ssrRenderClass([homeSettingsForm.value.impressionsMode === "manual" ? "border-blue-500 bg-blue-50/40 dark:bg-blue-950/30" : "border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-900/30", "p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"${_scopeId2}><input type="radio"${ssrIncludeBooleanAttr(homeSettingsForm.value.impressionsMode === "manual") ? " checked" : ""} class="mt-1 text-blue-600"${_scopeId2}><div${_scopeId2}><div class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:hand-pointing",
                    class: "w-4 h-4 text-blue-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u624B\u52A8\u6307\u5B9A\u6A21\u5F0F</span></div><p class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed"${_scopeId2}> \u7AD9\u957F\u81EA\u7531\u52FE\u9009\u5E76\u6392\u5E8F 4 \u6B3E\u6307\u5B9A\u5C55\u793A\u5728\u9996\u9875\u7684\u6838\u5FC3\u6A21\u578B\uFF0C\u4E0D\u53D7\u8BC4\u5206\u699C\u81EA\u52A8\u6392\u5E8F\u5F71\u54CD\u3002 </p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1" }, [
                      createVNode("div", {
                        class: ["p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3", homeSettingsForm.value.impressionsMode === "auto" ? "border-blue-500 bg-blue-50/40 dark:bg-blue-950/30" : "border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-900/30"],
                        onClick: ($event) => homeSettingsForm.value.impressionsMode = "auto"
                      }, [
                        createVNode("input", {
                          type: "radio",
                          checked: homeSettingsForm.value.impressionsMode === "auto",
                          class: "mt-1 text-blue-600"
                        }, null, 8, ["checked"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:sparkle",
                              class: "w-4 h-4 text-amber-500"
                            }),
                            createVNode("span", null, "\u81EA\u52A8\u667A\u80FD\u6A21\u5F0F (\u63A8\u8350)")
                          ]),
                          createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed" }, " \u7CFB\u7EDF\u6839\u636E\u6570\u636E\u5E93\u4E2D\u5404\u6A21\u578B\u7684\u7EFC\u5408\u8BC4\u5206\u4E0E\u5199\u4EE3\u7801\u80FD\u529B\u8BC4\u5206\uFF0C\u81EA\u52A8\u52A8\u6001\u6311\u9009\u5E76\u5C55\u793A Top 4 \u4E3B\u529B\u6A21\u578B\u3002 ")
                        ])
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3", homeSettingsForm.value.impressionsMode === "manual" ? "border-blue-500 bg-blue-50/40 dark:bg-blue-950/30" : "border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-900/30"],
                        onClick: ($event) => homeSettingsForm.value.impressionsMode = "manual"
                      }, [
                        createVNode("input", {
                          type: "radio",
                          checked: homeSettingsForm.value.impressionsMode === "manual",
                          class: "mt-1 text-blue-600"
                        }, null, 8, ["checked"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:hand-pointing",
                              class: "w-4 h-4 text-blue-500"
                            }),
                            createVNode("span", null, "\u624B\u52A8\u6307\u5B9A\u6A21\u5F0F")
                          ]),
                          createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed" }, " \u7AD9\u957F\u81EA\u7531\u52FE\u9009\u5E76\u6392\u5E8F 4 \u6B3E\u6307\u5B9A\u5C55\u793A\u5728\u9996\u9875\u7684\u6838\u5FC3\u6A21\u578B\uFF0C\u4E0D\u53D7\u8BC4\u5206\u699C\u81EA\u52A8\u6392\u5E8F\u5F71\u54CD\u3002 ")
                        ])
                      ], 10, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (homeSettingsForm.value.impressionsMode === "manual") {
              _push2(`<div class="space-y-4 pt-2"${_scopeId}><div class="text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId}> \u4ECE\u73B0\u6709\u6A21\u578B\u5E93\u52FE\u9009\u9996\u9875\u5C55\u793A\u6A21\u578B\uFF08\u6309\u52FE\u9009\u987A\u5E8F\u5C55\u793A\u524D 4 \u6B3E\uFF09\uFF1A </div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto p-2 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50/40 dark:bg-gray-900/40"${_scopeId}><!--[-->`);
              ssrRenderList(modelsList.value, (m) => {
                _push2(`<div class="${ssrRenderClass([isManualModelSelected(m.slug) ? "border-blue-500 bg-blue-50/60 dark:bg-blue-950/60 font-medium text-blue-900 dark:text-blue-200" : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-gray-300", "flex items-center gap-2.5 p-2 rounded-lg border text-xs cursor-pointer transition-all"])}"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(isManualModelSelected(m.slug)) ? " checked" : ""} class="rounded text-blue-600"${_scopeId}><span class="truncate flex-1"${_scopeId}>${ssrInterpolate(m.name)}</span>`);
                if (isManualModelSelected(m.slug)) {
                  _push2(`<span class="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-500 text-white font-mono"${_scopeId}>${ssrInterpolate(getManualModelOrder(m.slug))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-3" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all", activeHomeSettingsTab.value === "combo" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 shadow-2xs font-semibold" : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"],
                    onClick: ($event) => activeHomeSettingsTab.value = "combo"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:stack",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "1. \u7AD9\u957F\u65E5\u5E38\u5B9E\u6218\u642D\u914D (Combo)")
                  ], 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: ["flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all", activeHomeSettingsTab.value === "impressions" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 shadow-2xs font-semibold" : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"],
                    onClick: ($event) => activeHomeSettingsTab.value = "impressions"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:trophy",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "2. \u300C\u6211\u7684\u611F\u53D7\u300D\u5C55\u793A\u4E0E\u7CBE\u9009")
                  ], 10, ["onClick"])
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                        createVNode("span", null, "\u{1F4A1} \u7AD9\u957F\u4E3B\u529B\u7EC4\u5408\u914D\u7F6E"),
                        createVNode("span", { class: "text-xs font-normal text-gray-500 dark:text-gray-400" }, "\uFF08\u5728\u9996\u9875\u6392\u884C\u699C\u4E0B\u65B9\u5C55\u793A\u4F60\u7684\u65E5\u5E38\u4E3B\u529B\u5DE5\u4F5C\u6D41\uFF09")
                      ])
                    ]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:plus",
                      size: "xs",
                      onClick: addComboItem
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6DFB\u52A0\u642D\u914D\u9879 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "space-y-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(homeSettingsForm.value.dailyCombo, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "flex flex-col sm:flex-row sm:items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50"
                      }, [
                        createVNode("div", { class: "flex items-center gap-2 sm:w-32 shrink-0" }, [
                          createVNode("span", { class: "text-xs font-mono text-gray-400" }, "#" + toDisplayString(index + 1), 1),
                          createVNode(_component_UInput, {
                            modelValue: item.tag,
                            "onUpdate:modelValue": ($event) => item.tag = $event,
                            placeholder: "\u65E5\u5E38 70%",
                            size: "xs",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "flex-1" }, [
                          createVNode(_component_UInput, {
                            modelValue: item.model,
                            "onUpdate:modelValue": ($event) => item.model = $event,
                            placeholder: "\u6A21\u578B\u540D\u79F0 (\u5982 Gemini 2.5 Flash)",
                            size: "xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "sm:w-44" }, [
                          createVNode(_component_UInput, {
                            modelValue: item.note,
                            "onUpdate:modelValue": ($event) => item.note = $event,
                            placeholder: "\u573A\u666F\u7B80\u8FF0 (\u5982 \u6781\u901F\u65E0\u611F)",
                            size: "xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "sm:w-32 shrink-0" }, [
                          createVNode(_component_USelect, {
                            modelValue: item.color,
                            "onUpdate:modelValue": ($event) => item.color = $event,
                            items: colorOptions,
                            size: "xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "flex items-center gap-1 shrink-0 justify-end" }, [
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "ghost",
                            icon: "ph:arrow-up",
                            size: "xs",
                            disabled: index === 0,
                            onClick: ($event) => moveComboItem(index, -1)
                          }, null, 8, ["disabled", "onClick"]),
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "ghost",
                            icon: "ph:arrow-down",
                            size: "xs",
                            disabled: index === homeSettingsForm.value.dailyCombo.length - 1,
                            onClick: ($event) => moveComboItem(index, 1)
                          }, null, 8, ["disabled", "onClick"]),
                          createVNode(_component_UButton, {
                            color: "error",
                            variant: "ghost",
                            icon: "ph:trash",
                            size: "xs",
                            onClick: ($event) => removeComboItem(index)
                          }, null, 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "mt-4 p-4 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" }, [
                    createVNode("div", { class: "text-xs font-medium text-gray-400 dark:text-gray-500 mb-2 flex items-center gap-1" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:eye",
                        class: "w-3.5 h-3.5"
                      }),
                      createVNode("span", null, "\u9996\u9875\u5B9E\u65F6\u6548\u679C\u9884\u89C8\uFF1A")
                    ]),
                    createVNode("div", { class: "flex flex-wrap items-center gap-x-4 gap-y-2 text-xs" }, [
                      createVNode("span", { class: "font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1" }, [
                        createVNode("span", null, "\u{1F4A1}"),
                        createVNode("span", null, "\u7AD9\u957F\u65E5\u5E38\u5B9E\u6218\u642D\u914D\uFF1A")
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(homeSettingsForm.value.dailyCombo, (combo, idx) => {
                        return openBlock(), createBlock(Fragment, { key: idx }, [
                          idx > 0 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-slate-300 dark:text-slate-700"
                          }, "\xB7")) : createCommentVNode("", true),
                          createVNode("div", { class: "flex items-center gap-1.5 text-slate-600 dark:text-slate-300" }, [
                            createVNode("span", {
                              class: ["rounded px-1.5 py-0.5 text-[10px] font-semibold", getComboPreviewBadge(combo.color)]
                            }, toDisplayString(combo.tag || "\u9636\u6BB5"), 3),
                            createVNode("strong", { class: "text-slate-800 dark:text-slate-100" }, toDisplayString(combo.model || "\u6A21\u578B\u540D"), 1),
                            combo.note ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-slate-400 dark:text-slate-500 text-[11px]"
                            }, " (" + toDisplayString(combo.note.replace(/^\((.*)\)$/, "$1")) + ") ", 1)) : createCommentVNode("", true)
                          ])
                        ], 64);
                      }), 128))
                    ])
                  ])
                ], 512), [
                  [vShow, activeHomeSettingsTab.value === "combo"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-6" }, [
                  createVNode(_component_UFormField, {
                    label: "\u9996\u9875\u300C\u6211\u7684\u611F\u53D7\u300D\u526F\u6807\u9898\u8BF4\u660E",
                    description: "\u5C55\u793A\u5728\u9996\u9875\u6392\u884C\u699C\u6807\u9898\u4E0B\u65B9\u7684\u8BF4\u660E\u6587\u6848"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: homeSettingsForm.value.impressionsSubtitle,
                        "onUpdate:modelValue": ($event) => homeSettingsForm.value.impressionsSubtitle = $event,
                        placeholder: "\u57FA\u4E8E\u7AD9\u957F\u65E5\u5E38\u5168\u6808\u5F00\u53D1\u4E0E\u91CD\u6784\u7684\u771F\u5B9E\u4F53\u611F\u6253\u5206\uFF0C\u62D2\u7EDD\u4E91\u8BC4\u6D4B\u4E0E\u865A\u5047\u53C2\u6570\u3002",
                        rows: 2,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u9996\u9875\u7CBE\u9009\u6A21\u578B\u751F\u6210\u6A21\u5F0F",
                    description: "\u9009\u62E9\u9996\u9875 4 \u6B3E\u63A8\u8350\u6A21\u578B\u7684\u6570\u636E\u6765\u6E90"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1" }, [
                        createVNode("div", {
                          class: ["p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3", homeSettingsForm.value.impressionsMode === "auto" ? "border-blue-500 bg-blue-50/40 dark:bg-blue-950/30" : "border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-900/30"],
                          onClick: ($event) => homeSettingsForm.value.impressionsMode = "auto"
                        }, [
                          createVNode("input", {
                            type: "radio",
                            checked: homeSettingsForm.value.impressionsMode === "auto",
                            class: "mt-1 text-blue-600"
                          }, null, 8, ["checked"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:sparkle",
                                class: "w-4 h-4 text-amber-500"
                              }),
                              createVNode("span", null, "\u81EA\u52A8\u667A\u80FD\u6A21\u5F0F (\u63A8\u8350)")
                            ]),
                            createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed" }, " \u7CFB\u7EDF\u6839\u636E\u6570\u636E\u5E93\u4E2D\u5404\u6A21\u578B\u7684\u7EFC\u5408\u8BC4\u5206\u4E0E\u5199\u4EE3\u7801\u80FD\u529B\u8BC4\u5206\uFF0C\u81EA\u52A8\u52A8\u6001\u6311\u9009\u5E76\u5C55\u793A Top 4 \u4E3B\u529B\u6A21\u578B\u3002 ")
                          ])
                        ], 10, ["onClick"]),
                        createVNode("div", {
                          class: ["p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3", homeSettingsForm.value.impressionsMode === "manual" ? "border-blue-500 bg-blue-50/40 dark:bg-blue-950/30" : "border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-900/30"],
                          onClick: ($event) => homeSettingsForm.value.impressionsMode = "manual"
                        }, [
                          createVNode("input", {
                            type: "radio",
                            checked: homeSettingsForm.value.impressionsMode === "manual",
                            class: "mt-1 text-blue-600"
                          }, null, 8, ["checked"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:hand-pointing",
                                class: "w-4 h-4 text-blue-500"
                              }),
                              createVNode("span", null, "\u624B\u52A8\u6307\u5B9A\u6A21\u5F0F")
                            ]),
                            createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed" }, " \u7AD9\u957F\u81EA\u7531\u52FE\u9009\u5E76\u6392\u5E8F 4 \u6B3E\u6307\u5B9A\u5C55\u793A\u5728\u9996\u9875\u7684\u6838\u5FC3\u6A21\u578B\uFF0C\u4E0D\u53D7\u8BC4\u5206\u699C\u81EA\u52A8\u6392\u5E8F\u5F71\u54CD\u3002 ")
                          ])
                        ], 10, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  homeSettingsForm.value.impressionsMode === "manual" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4 pt-2"
                  }, [
                    createVNode("div", { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, " \u4ECE\u73B0\u6709\u6A21\u578B\u5E93\u52FE\u9009\u9996\u9875\u5C55\u793A\u6A21\u578B\uFF08\u6309\u52FE\u9009\u987A\u5E8F\u5C55\u793A\u524D 4 \u6B3E\uFF09\uFF1A "),
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto p-2 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50/40 dark:bg-gray-900/40" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(modelsList.value, (m) => {
                        return openBlock(), createBlock("div", {
                          key: m.slug,
                          class: ["flex items-center gap-2.5 p-2 rounded-lg border text-xs cursor-pointer transition-all", isManualModelSelected(m.slug) ? "border-blue-500 bg-blue-50/60 dark:bg-blue-950/60 font-medium text-blue-900 dark:text-blue-200" : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-gray-300"],
                          onClick: ($event) => toggleManualModel(m.slug)
                        }, [
                          createVNode("input", {
                            type: "checkbox",
                            checked: isManualModelSelected(m.slug),
                            class: "rounded text-blue-600"
                          }, null, 8, ["checked"]),
                          createVNode("span", { class: "truncate flex-1" }, toDisplayString(m.name), 1),
                          isManualModelSelected(m.slug) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-[10px] px-1.5 py-0.2 rounded-full bg-blue-500 text-white font-mono"
                          }, toDisplayString(getManualModelOrder(m.slug)), 1)) : createCommentVNode("", true)
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ], 512), [
                  [vShow, activeHomeSettingsTab.value === "impressions"]
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isSyncModalOpen.value,
        "onUpdate:open": ($event) => isSyncModalOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><div class="flex items-center gap-3 text-amber-600"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-circle",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-base font-semibold text-gray-900 dark:text-white"${_scopeId}>\u540C\u6B65\u57FA\u51C6\u79CD\u5B50\u6570\u636E\u786E\u8BA4</h3></div><p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"${_scopeId}> \u8BE5\u64CD\u4F5C\u5C06\u4F7F\u7528\u4EE3\u7801\u5E93\u5185\u7F6E\u7684 \`data/models.ts\` \u57FA\u51C6\u6570\u636E\u91CD\u7F6E\u6216\u540C\u6B65\u6240\u6709\u5B98\u65B9\u57FA\u51C6\u6A21\u578B\u4FE1\u606F\u3002\u4F60\u81EA\u5B9A\u4E49\u65B0\u589E\u7684\u6A21\u578B\u4E0D\u4F1A\u88AB\u5220\u9664\u3002 </p><div class="flex items-center justify-end gap-3 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => isSyncModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: syncing.value,
              onClick: executeSyncSeed
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u786E\u8BA4\u540C\u6B65 `);
                } else {
                  return [
                    createTextVNode(" \u786E\u8BA4\u540C\u6B65 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("div", { class: "flex items-center gap-3 text-amber-600" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:warning-circle",
                    class: "w-6 h-6"
                  }),
                  createVNode("h3", { class: "text-base font-semibold text-gray-900 dark:text-white" }, "\u540C\u6B65\u57FA\u51C6\u79CD\u5B50\u6570\u636E\u786E\u8BA4")
                ]),
                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-300 leading-relaxed" }, " \u8BE5\u64CD\u4F5C\u5C06\u4F7F\u7528\u4EE3\u7801\u5E93\u5185\u7F6E\u7684 `data/models.ts` \u57FA\u51C6\u6570\u636E\u91CD\u7F6E\u6216\u540C\u6B65\u6240\u6709\u5B98\u65B9\u57FA\u51C6\u6A21\u578B\u4FE1\u606F\u3002\u4F60\u81EA\u5B9A\u4E49\u65B0\u589E\u7684\u6A21\u578B\u4E0D\u4F1A\u88AB\u5220\u9664\u3002 "),
                createVNode("div", { class: "flex items-center justify-end gap-3 pt-4" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => isSyncModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D6\u6D88 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: syncing.value,
                    onClick: executeSyncSeed
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u786E\u8BA4\u540C\u6B65 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/models.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
