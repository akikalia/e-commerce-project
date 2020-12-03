package com.homemoderator.commerce.security;

//todo: need to implement security

//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    private MyUserDetailsService detailsService;
//
//    public AuthenticationProvider authProvider(){
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//        provider.setUserDetailsService(detailsService);
//        provider.setPasswordEncoder(new BCryptPasswordEncoder());
//        return provider;
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable()
//                .authorizeRequests().antMatchers("/login").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin().loginPage("/login").permitAll()
//                .and()
//                .logout().invalidateHttpSession(true).clearAuthentication(true)
//                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                .logoutSuccessUrl("/").permitAll();
//    }

    //
//    @Bean
//    @Override
//    public UserDetailsService userDetailsServiceBean() throws Exception {
//
//        // add users in List
//        List<UserDetails> users = new ArrayList<UserDetails>();
//
//        users.add(User.withDefaultPasswordEncoder()
//                .username("user")
//                .password("user").roles("USER").build());
//
//        return new InMemoryUserDetailsManager(users);
//    }
//}