import { ref } from "vue";
import { useQuery } from '@tanstack/vue-query'
import { Api }  from '../../api/api'

const client = new Api({
    baseUrl: 'https://api.chucknorris.io',
})

export default function useJoke() {
//   const joke = ref<string | null>(null);

  const { isFetching, data, refetch, error } = useQuery({
    queryKey: ['joke-fetch-key'],
    queryFn: async () => {
      let x = await client.jokes.getRandomJokeValueUsingGet()
      let y = await x.json()
      return y
    },
    enabled: false,
  })

  return { data, refetch, isFetching, error };
}