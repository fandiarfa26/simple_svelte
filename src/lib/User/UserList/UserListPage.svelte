<script lang="ts">
  import Header from "../../components/Header.svelte";
  import ContainerWrapper from "../../components/ContainerWrapper.svelte";
  import Breadcrumb from "../../components/Breadcrumb.svelte";
  import { titleApp } from "../../../constants";
  import UserListCard from "./components/UserListCard.svelte";

  $: {
    document.title = "List User - " + titleApp;
  }
</script>

<main>
  <Header />
  <ContainerWrapper>
    <Breadcrumb items={[{ label: "List User" }]} />
    <UserListCard />
  </ContainerWrapper>
</main>
